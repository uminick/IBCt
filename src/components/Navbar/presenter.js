import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './'
import './App.css';
const Navbar= props =>{


    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={props.sizeVar}>
                <div className="container content" >
                    <Link to="/" className="navbar-brand">
                        <img src={require('../../IBCt_logo2.png') } alt="home"/>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <button onClick={props.scatter} className="btn btn-primary connect_btn" value={props.btn}>
                            {props.btn}
                        </button>
                    </div>
                </div>
            </nav>

{/*             <div className="container firstpage">
                <h1>IBCt</h1>
                <h2>I Believe Contract</h2>
                <div className="container firstpage-content">
                    <img src='../../IBCt_logo.png'/>
                </div>
            </div> */}
        </div>
    )
}

Navbar.propTypes={
    scatter:PropTypes.func,
    btn:PropTypes.string
}

export default Navbar;