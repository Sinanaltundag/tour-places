import "./Navbar.css"

function Navbar() {

  return (
    <div>
      <div className="navbar navbar-expand-md navbar-dark p-0">
        <div className="container-fluid ">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="aboutus">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="foryou">
                  FOR YOU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="vlog">
                  VLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact">
                  CONTACT
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
