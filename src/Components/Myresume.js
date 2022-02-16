import React from "react";
import Nitin from './Nitin.jpg';
import "../Style/Myresume.css";

const Myresume = () => {
  
  const headingstyle={
    
      fontWeight: "400",
      margin: "10px 0"
    
  };

return(

    <div className="resume-content resume-margin-top" >
      <div className="resume-row-padding">
      
        <div className="resume-third">
        
          <div className="resume-white resume-text-grey resume-card-4">
            <div className="resume-display-container">
              <img src={Nitin}  alt="Avatar"/>
              <div className="resume-display-bottomleft resume-container resume-text-black">
                <h2 style={headingstyle}>Nitin Dinkar</h2>
              </div>
            </div>

            <div className="resume-container">
              <p><i className="fa fa-briefcase fa-fw resume-margin-right resume-large resume-text-teal"></i>Front End Developer</p>
              <p><i className="fa fa-home fa-fw resume-margin-right resume-large resume-text-teal"></i>Delhi, India</p>
              <p><i className="fa fa-envelope fa-fw resume-margin-right resume-large resume-text-teal"></i>er.nitindinkar@gmail.com</p>
              <p><i className="fa fa-phone fa-fw resume-margin-right resume-large resume-text-teal"></i>+91 8527578157</p>
              <hr/>
    
              <p className="resume-large"><b><i className="fa fa-asterisk fa-fw resume-margin-right resume-text-teal"></i>Skills</b></p>
              <p>HTML</p>
              <div className="resume-light-grey resume-round-xlarge resume-small">
                <div className="resume-container resume-center resume-round-xlarge resume-teal" >90%</div>
              </div>
              <p>CSS</p>
              <div className="resume-light-grey resume-round-xlarge resume-small">
                <div className="resume-container resume-center resume-round-xlarge resume-teal" >
                  <div className="resume-center resume-text-white">80%</div>
                </div>
              </div>
              <p>Javascript</p>
              <div className="resume-light-grey resume-round-xlarge resume-small">
                <div className="resume-container resume-center resume-round-xlarge resume-teal" >75%</div>
              </div>
              <p>React Js</p>
              <div className="resume-light-grey resume-round-xlarge resume-small">
                <div className="resume-container resume-center resume-round-xlarge resume-teal" >70%</div>
              </div>
              <p>Bootstrap</p>
              <div className="resume-light-grey resume-round-xlarge resume-small">
                <div className="resume-container resume-center resume-round-xlarge resume-teal" >70%</div>
              </div>
              <p>Wordpress</p>
              <div className="resume-light-grey resume-round-xlarge resume-small">
                <div className="resume-container resume-center resume-round-xlarge resume-teal" >70%</div>
              </div>
              <br/>

              <p className="resume-large resume-text-theme"><b><i className="fa fa-globe fa-fw resume-margin-right resume-text-teal"></i>Languages</b></p>
              <p>Hindi</p>
              <div className="resume-light-grey resume-round-xlarge">
                <div className="resume-round-xlarge resume-teal" ></div>
              </div>
              <p>English</p>
              <div className="resume-light-grey resume-round-xlarge">
                <div className="resume-round-xlarge resume-teal" ></div>
              </div>
              
              <br/>
            </div>
          </div><br/>
    
        </div>
    
        <div className="resume-twothird">
        
          <div className="resume-container resume-card resume-white resume-margin-bottom">
            <h2 style={headingstyle} className="resume-text-grey resume-padding-16"><i className="fa fa-suitcase fa-fw resume-margin-right resume-xxlarge resume-text-teal"></i>Work Experience</h2>
            <p>Innovative UI Developer with 5+ years of experience building and maintaining responsive website.
</p>

            <div className="resume-container">
              <h5 style={headingstyle} className="resume-opacity"><b>Adaan Digital Solutions Pvt. Ltd.</b></h5>
              <h6 style={headingstyle} className="resume-text-teal"><i className="fa fa-calendar fa-fw resume-margin-right"></i>May 2017 - <span className="resume-tag resume-teal resume-round">Current</span></h6>
              <p>Front End Developer / UI Developer</p>
              <hr/>
            </div>
            <div className="resume-container">
              <h5 style={headingstyle} className="resume-opacity"><b>Uttpati Ecom Pvt. Ltd. </b></h5>
              <h6 style={headingstyle} className="resume-text-teal"><i className="fa fa-calendar fa-fw resume-margin-right"></i>Feb 2016 - April 2017</h6>
              <p>Front End Developer / UI Developer</p>
              <hr/>
            </div>

            <h2 style={headingstyle} className="resume-text-grey resume-padding-16"><i className="fa fa-suitcase fa-fw resume-margin-right resume-xxlarge resume-text-teal"></i>Projects</h2>

            <div className="resume-container">
              <h5 style={headingstyle} className="resume-opacity"><a href="/" ><b>Bhaarat News</b> <i className="fas fa-external-link-alt" aria-hidden="true"></i>
</a></h5>
              <p>Bhaarat is a my own build news react application in which letest news data fetch from API and you can search news by key word or navigate by category. </p>
              <p>Skills:- React , Css, Bootstrap, and Javascript.
</p>
              <hr/>
            </div>

            <div className="resume-container">
              <h5 style={headingstyle} className="resume-opacity"><a href="https://www.cuisine-florian.com/" target="_blank"><b>Cuisine Florian</b> <i className="fas fa-external-link-alt" aria-hidden="true"></i>
</a></h5>
              <p>Skills:- Wordpress , Css, and Javascript.
</p>
              <hr/>
            </div>

            <div className="resume-container">
              <h5 style={headingstyle} className="resume-opacity"><a href="https://www.norweldindustries.com/" target="_blank"><b>Norweld Industries Ltd.</b> <i className="fas fa-external-link-alt" aria-hidden="true"></i>
</a></h5>
              <p>Skills:- Wordpress , Css, and Javascript. </p>
              <hr/>
            </div>
            <div className="resume-container">
              <h5 style={headingstyle} className="resume-opacity"><a href="http://behappyhealthcare.com/" target="_blank"><b>behappyhealthcare.com</b> <i className="fas fa-external-link-alt" aria-hidden="true"></i>
</a></h5>
              <p>Skills:- Wordpress , Css, and Javascript. </p>
              <hr/>
            </div>
            <div className="resume-container">
              <h5 style={headingstyle} className="resume-opacity"><a href="https://buriez-sarl.site-privilege.pagesjaunes.fr/" target="_blank"><b>buriez-sarl.site-privilege.pagesjaunes.fr</b> <i className="fas fa-external-link-alt" aria-hidden="true"></i>
</a></h5>
              <p>Skills:- Wordpress , Css, and Javascript. </p>
            </div>
          </div>
    
          <div className="resume-container resume-card resume-white">
            <h2 style={headingstyle} className="resume-text-grey resume-padding-16"><i className="fa fa-certificate fa-fw resume-margin-right resume-xxlarge resume-text-teal"></i>Education</h2>
            <div className="resume-container">
              <h5 style={headingstyle} className="resume-opacity"><b>BTECH (Computer Science)
</b></h5>
              <h6 style={headingstyle} className="resume-text-teal"><i className="fa fa-calendar fa-fw resume-margin-right"></i>2010 - 2014</h6>
              <p>Amity School of Engineering and Technology
</p>
              <hr/>
            </div>
            <div className="resume-container">
              <h5 style={headingstyle} className="resume-opacity"><b>Intermediate</b></h5>
              <h6 style={headingstyle} className="resume-text-teal"><i className="fa fa-calendar fa-fw resume-margin-right"></i>2008 - 2009</h6>
              <p>Munsi Premchand Rajkiya sarvodaya Bal vidyalya
</p>
            </div>


          </div>
    
        </div>
        
      </div>
      
    </div>
    

);

};
export default Myresume;

