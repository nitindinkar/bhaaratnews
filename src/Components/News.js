import React from "react";
import PropTypes from 'prop-types';
import Spinner from "./Spinner";
import { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Newsitem from "./Newsitem";

const News = (props) => {
  const [articles, setArticals] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
   

    const updateNews = async ()=> {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4e8e311995a94cdc84613c08ca4dd807&page=${page}&pageSize=${props.pageSize}`; 

      setLoading(true)
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json()
      props.setProgress(70);
      setArticals(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);
  };

   
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4e8e311995a94cdc84613c08ca4dd807&page=${page+1}&pageSize=${props.pageSize}`;

    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticals(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = articles.filter((value) => {
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
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                
      <div className="row" >
        {filteredData.length === 0 ? articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <Newsitem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                }
                newsUrl={element.url ? element.url : ""}
                author={element.author ? element.author : "Unknown"}
                date={element.publishedAt ? element.publishedAt : ""}
                source={element.source.name ? element.source.name : "Unknown"}
                id={element.source.id ? element.source.id : ""}
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
                  element.urlToImage
                    ? element.urlToImage
                    : "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                }
                newsUrl={element.url ? element.url : ""}
                author={element.author ? element.author : "Unknown"}
                date={element.publishedAt ? element.publishedAt : ""}
                source={element.source.name ? element.source.name : "Unknown"}
                id={element.source.id ? element.source.id : ""}
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
