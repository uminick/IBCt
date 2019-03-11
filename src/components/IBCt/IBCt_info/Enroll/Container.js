import React,{Component} from 'react';
import Enroll from './presenter';

class Container extends Component{
    constructor(props){
        super(props);
        this.state={
            modal:false,
            receiver:"contractmngm",
            contractorA: "",
            contractorB: "",
            title: "",
            hashValue: "",
            fileUrl:""
        }
        this._toggle=this._toggle.bind(this);
        this._handleChange=this._handleChange.bind(this);
        this._handleSubmit=this._handleSubmit.bind(this);
    }
    
    _toggle=()=>{
        this.setState({...this.state,
            modal:!this.state.modal
        });
    }

    _handleChange(e){
        let stateName=e.target.name;
        this.setState({...this.state,[stateName]:e.target.value})
    }

    _handleSubmit(e){
        e.preventDefault();
        this.props.enroll(this.props.username,this.state.receiver,this.state.contractorA,this.state.contractorB,this.state.title,this.state.hashValue,this.state.fileUrl);
        this.setState({...this.state,modal:false})
    }

    render(){
        return(
            <Enroll {...this.props} username={this.props.username} func={this.props.func} toggle={this._toggle} modal={this.state.modal} submit={this._handleSubmit} handleChange={this._handleChange}/>
        )
    }
} 

export default Container;