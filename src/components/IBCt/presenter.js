import React from 'react';
import Navbar from '../Navbar';
import './App.css'
import IbI from './IBCt_info';
const IBCt= props => [
    <div>
        <div className="container-fluid">
                <Navbar {...props}/>
        </div>


        <div className="row IBCt container">
            <div className="col-sm-12 ibct_Info" >
            <IbI {...props}/>
                <div className="row">
                    <div classname="col-sm-12 first">

                    </div>
              </div>
            </div>
        </div>
    </div>

]

export default IBCt;