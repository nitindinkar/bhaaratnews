import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const Navbar = () => {

  const [y, setY] = useState(window.scrollY);

const handleNavigation = useCallback(
  e => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      console.log("scrolling up");
      let hl = document.getElementById('header');
      hl.classList.remove('header-up');
      

    } else if (y < window.scrollY) {
      console.log("scrolling down");
      let hl = document.getElementById('header');
      hl.classList.add('header-up');
      

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
    <div>
      <nav id="header" className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container bg-dark">
          <Link className="navbar-brand" to="/">
            Bhaarat News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/top">Top</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/myresume">My Resume</Link></li>
                        </ul>


          </div>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;
