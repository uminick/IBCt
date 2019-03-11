import React,{Component} from 'react';
import Erase from './presenter';

class Container extends Component{
    constructor(props){
        super(props);
        this.state={
            receiver:"contractmngm"
        }

        this._handleErase=this._handleErase.bind(this);
    }

    _handleErase=()=>{
        this.props.erase(this.props.username, this.state.receiver)
    }

    render(){
        //this.props.loadTable();
        return(
            <Erase {...this.props} handleErase={this._handleErase}/>
        )
    }
} 

export default Container;