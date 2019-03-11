import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import Scatter from '../scatter';

//import ScatterLogin from '../components/scatter/ScatterLogin';
const Main = props=>{
    return[
            <Scatter {...props}/> 
    ]
};

function mapStateToProps(state){
    return{
        currentUser:state.currentUser
};
}

export default withRouter(connect(mapStateToProps,null)(Main))