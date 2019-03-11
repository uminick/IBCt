import React,{Component} from 'react';
import IBCt from './presenter';

class Container extends Component{
    render(){
        return(
            <IBCt {...this.props} />
        )
    }
} 

export default Container;