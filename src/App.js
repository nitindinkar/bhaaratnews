import React, { useState } from 'react'
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import News from "./Components/News";
import Myresume from './Components/Myresume';
import {BrowserRouter as Router,Routes, Route  } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const pageSize = 6;
  const [progress, setProgress] = useState(0)
  return (
    <div className="App">
      <div>
        <Router>
         
        <header >
        <Navbar />
        </header>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      <section className="wrapper">
          <div className="container">

        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}   key="general" pageSize={pageSize} country="in" category="general"/>}></Route> 
          <Route exact path="/business" element={<News setProgress={setProgress}   key="business" pageSize={pageSize} country="in" category="business"/>}></Route> 
          <Route exact path="/entertainment" element={<News setProgress={setProgress}   key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route> 
          <Route exact path="/general" element={<News setProgress={setProgress}   key="general" pageSize={pageSize} country="in" category="general"/>}></Route> 
          <Route exact path="/health" element={<News setProgress={setProgress}   key="health" pageSize={pageSize} country="in" category="health"/>   }></Route> 
          <Route exact path="/science" element={<News setProgress={setProgress}   key="science" pageSize={pageSize} country="in" category="science"/>}></Route> 
          <Route exact path="/sports" element={<News setProgress={setProgress}   key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route> 
          <Route exact path="/technology" element={<News setProgress={setProgress}   key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route> 
          <Route exact path="/myresume" element={<Myresume setProgress={setProgress}/>}></Route> 


        </Routes>
          </div>
        </section>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
