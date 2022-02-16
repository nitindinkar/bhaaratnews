import React from "react";
import PropTypes from 'prop-types';
import Spinner from "./Spinner";
import { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Newsitem from "./Newsitem";

const News = (props) => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
   

    const updateNews = async ()=> {
      props.setProgress(10);
      const url = `https://newsdata.io/api/1/news?apikey=pub_4633f7c36e004fc89d87ad61056ddd05dec4&country=${props.country}&category=${props.category}&page=${page}`; 

      setLoading(true)
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json()
      props.setProgress(70);
      setResults(parsedData.results)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);
  };

   
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsdata.io/api/1/news?apikey=pub_4633f7c36e004fc89d87ad61056ddd05dec4&country=${props.country}&category=${props.category}&page=${page+1}`;

    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setResults(results.concat(parsedData.results));
    setTotalResults(parsedData.totalResults);
  };

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = results.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

   const searchiconstyle ={
    marginLeft: "-32px",
    display: "grid",
    placeItems: "center",
    padding: "0 5px"
   };
  
   const [y, setY] = useState(window.scrollY);

   const handleNavigation = useCallback(
     e => {
       const window = e.currentTarget;
       if (y > window.scrollY) {
        
         let fl = document.getElementById('form');
         fl.classList.remove('form-up');
   
       } else if (y < window.scrollY) {
        
         let fl = document.getElementById('form');
         fl.classList.add('form-up');
   
       }
       setY(window.scrollY);
     }, [y]
   );
   useEffect(() => {
     setY(window.scrollY);
     window.addEventListener("scroll", handleNavigation);
   
     return () => {
       window.removeEventListener("scroll", handleNavigation);
     };
   }, [handleNavigation]);
   
  return (
    <>
    <form className="d-flex form" id="form" >
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
               
                value={wordEntered}
          onChange={handleFilter}
              />
              <div className="searchIcon" style={searchiconstyle}>
          {filteredData.length === 0 ? (
            <i className="fas fa-search" style={{background:"#ffffff"}}></i>
          ) : (
            <i className="fas fa-times-circle"  onClick={clearInput} style={{background:"#ffffff"}}></i>
            
          )}
        </div>
            </form>
      <h1 style={{textAlign:"center"}}>Top Headlines Bhaarat News </h1>
      {loading && <Spinner />}
      <InfiniteScroll
                    dataLength={results.length}
                    next={fetchMoreData}
                    hasMore={results.length !== totalResults}
                    loader={<Spinner/>}
                > 
                
      <div className="row" >
        {filteredData.length === 0 ? results.map((element) => {
          return (
            <div className="col-md-4" key={element.link}>
              <Newsitem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={
                  element.image_url
                    ? element.image_url
                    : "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                }
                newsUrl={element.link ? element.link : ""}
                author={element.creator ? element.creator : "Unknown"}
                date={element.pubDate ? element.pubDate : ""}
                source={element.source_id ? element.source_id : "Unknown"}
                content={element.content ? element.content : ""}
              />
            </div>
          );
        }) : filteredData.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <Newsitem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={
                  element.image_url
                    ? element.image_url
                    : "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                }
                newsUrl={element.link ? element.link : ""}
                author={element.creator ? element.creator : "Unknown"}
                date={element.pubDate ? element.pubDate : ""}
                source={element.source_id ? element.source_id : "Unknown"}
                content={element.content ? element.content : ""}
              />
            </div>
          );
        }) 
        
        }
      </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;
