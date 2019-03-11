import React,{Component} from 'react';
import IbI from './presenter';

class Container extends Component{
    constructor(props){
        super(props);
        this.state={
            modal:false
        }
        this._lookupbtn=this._lookupbtn.bind(this);
    }

    _lookupbtn=()=>{
        this.setState({...this.state,
            modal:!this.state.modal
    });
}

    render(){
        return(
            <IbI {...this.props} lookupbtn={this._lookupbtn} />
        )
    }
} 

export default Container;