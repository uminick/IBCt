import React ,{Component} from 'react';
import Navbar from '../Navbar';
import Connect from './presenter';

class Container extends Component{
    render(){
        let status=this.props.status;
        let user=this.props.username;
        const connectScatter=this.props.connectToScatter;
        const disconnect=this.props.disconnect;
        
        
        if(status==="Connected to Scatter" && user){
            return(                 
                <Connect {...this.props} username={user} disconnectScatter={disconnect} />
            )
        }else{
            return(
                <Navbar {...this.props} username={user} connectScatter={connectScatter} disconnect={disconnect}/>
                
            )
            
        }}
}

export default Container;