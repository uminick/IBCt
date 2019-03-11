import React,{Component} from 'react';
import Lookup from './presenter';

class Container extends Component{
    constructor(props){
        super(props);
        this.state ={
            getTitle: ""
        }
        this._getTitleBtn=this._getTitleBtn.bind(this);
    }
    
    _getTitleBtn(e){
        //e.preventDefault();
        const getT = this.props.loadTable();
        this.setState({
            ...this,
            getTitle:getT
        })
    }

    render(){
        //this.props.loadTable();
        return(
            <Lookup {...this.props} getTitleBtn={this._getTitleBtn}/>
        )
    }
} 

export default Container;