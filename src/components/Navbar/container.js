import React,{Component} from 'react';
import Navbar from './presenter';
import Connect from './presenter';
import PropTypes from 'prop-types';

class Container extends Component{
    state={
        location:"15%"
    }


    scatter=(e)=>{
        if(e.target.value==="Connect to Scatter"){
            return this.props.connectScatter();
        }else{
            return this.props.disconnectScatter();
        }
    }

    render(){
        let sizeVar={
            height:this.state.location
        }
        let user=this.props.username;
        if(user){
            return <Connect {...this.props} btn="Logout" scatter={this.scatter} sizeVar={sizeVar}/>
        }else{
        return <Navbar {...this.props} btn="Connect to Scatter" scatter={this.scatter} sizeVar={sizeVar}/>
        }
    }
}

Container.propTypes={
    connectScatter:PropTypes.func,
    disconnectScatter:PropTypes.func
}

export default Container;