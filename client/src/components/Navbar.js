import React from 'react';
import {
    Link
} from 'react-router-dom';
const Navbar =(props)=>{

    return(
          <nav className="navbar navbar-default navbar-doublerow navbar-trans navbar-fixed-top">
            <nav className="navbar navbar-down" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="flex-container">
          <div className="navbar-header flex-item">
            <Link to ="/">
              <div className="navbar-brand-logo">
                    <img src="img/hommore-logo3.svg" alt="hommore logo"/>
              </div>
            </Link>
          </div>
          <ul className="nav navbar-nav links flex-item hidden-xs">
            <li>
                  <Link to="/Resources" style={{paddingLeft: '0px', marginRight: '15px'}}>Resources</Link>
            </li>
            <li>
                  <Link to="/Report" style={{paddingLeft: '0px', marginRight: '15px'}}>Report</Link>
            </li>
            <li>
                  <Link to="/Donate" style={{ paddingLeft: '0px', marginRight: '15px' }}>Donate</Link>
            </li>
            <li>
                  <Link to="/About" style={{ paddingLeft: '0px', marginRight: '15px' }}>About</Link>
            </li>
            <li>
                  <Link to="/Contact" style={{ paddingLeft: '0px', marginRight: '15px' }}>Contact</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav flex-item hidden-xs pull-right">
            <li className="login-button">Login</li>
            <li className="signup-button">Signup</li>
        
          </ul>
         
          <div className="dropdown visible-xs pull-right">
            <button className="btn btn-default dropdown-toggle " type="button" id="dropdownmenu" data-toggle="dropdown">
              <span className="glyphicon glyphicon-align-justify"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to ="/">Resources</Link>
              </li>
              <li>
                <Link to ="/">Report</Link>
              </li>
              <li>
                <Link to ="/">Donate</Link>
              </li>
              <li>
                <Link to ="/">About</Link>
              </li>
              <li>
                <Link to ="/">Contact</Link>
              </li>
              <li role="separator" className="divider"></li>
              <li>
                <Link to ="/" className="">Login</Link>
              </li>
              <li>
                <Link to ="/" className="">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </nav>

    )
}
export default Navbar;

