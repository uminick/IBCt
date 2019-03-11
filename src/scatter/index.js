import React, {Component} from 'react';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import 'bootstrap/dist/css/bootstrap.css';
import Eos from 'eosjs';
import alertify from 'alertifyjs';
import Connect from '../components/Connect'
import { networks } from '../config/default';

const network = {
  blockchain: networks.blockchain,
  protocol: networks.protocol,
  host: networks.host,
  port: networks.port,
  chainId: networks.chainId
}

class Scatter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: "Not Connected to Scatter",
          name: "",
          isScatterInstalled: true,
          account: [],
          transaction: "",
          public_key: "",
          contractTitle:""
        }
        this.Connect = this.Connect.bind(this);
        this.Enroll = this.Enroll.bind(this);
        this.LoadTable = this.LoadTable.bind(this);
        this.Erase = this.Erase.bind(this);

        this.getScatterInfo = this.getScatterInfo.bind(this);
        this.Disconnect = this.Disconnect.bind(this);
    }
    Disconnect = () => {
      ScatterJS.scatter.forgetIdentity();
      this.setState({
        name: ``
      });
      this.setState({
        account: []
      });
    }
    Connect = () => {
        debugger;
        ScatterJS.plugins(new ScatterEOS());
        ScatterJS.scatter.connect("IBCT").then(connected => {
          if (!connected) {
            // User does not have Scatter installed/unlocked.
            this.setState({
              isScatterInstalled: false
            });
            return false;
          }
          // Use `scatter` normally now.
          this.setState({
            isScatterInstalled: true
          });
          const scatter = ScatterJS.scatter;
          window.ScatterJS = null;
          const requiredFields = {
            accounts: [network]
          };
          scatter.getIdentity(requiredFields).then(() => {
            //add the account to the state
    
            //get the account
            const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
    
            // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
            this.setState({ ...this.state,
              account: [...this.state.account, account]
            });
            this.setState({ ...this.state,
              status: "Connected to Scatter"
            });
            this.setState({ ...this.state,
              name: account.name
            });
            this.setState({ ...this.state,
              public_key: [...this.state.public_key, scatter.identity.publicKey]
            });
            //alertify.success(`You Have Successfully Connect`);
            console.log("Connected");
            return account.name;
          });
        }).catch(err=>{
            //alertify.error(`There seems to be an error with Your Transaction. Please Try Again Later ${err.message}`);
            console.log(err.message);
        });
      }


      Enroll = async (username, receiver, contractorA, contractorB, title, hashValue, fileUrl) => {
        debugger;
        const scatter = ScatterJS.scatter;
        const eosOptions = {
          expireInSeconds: 60
        };
        // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
        const eos = scatter.eos(network, Eos, eosOptions);
        
       await eos.transaction({
        actions: [{
          account: receiver,
          name: 'upsert',
          authorization: [{
            actor: username,
            permission: 'active',
          }],
          data: {
            user: username,
            idx: 1,
            contractor1: contractorA,
            contractor2: contractorB,
            title: title,
            hashv: hashValue,
            oglink: fileUrl,
            },
          }]
        }).then(trx => {
          // That's it!
          console.log(`Transaction ID: ${trx.transaction_id}`);
          alertify.success(`계약서가 성공적으로 등록되었습니다.`);
          console.log('등록 성공');
          this.setState({
            msg: `transaction made!!`
          });
        }).catch(error => {
          debugger;
          console.error('등록 실패 : '+error.message);
          alertify.error(`트랜잭션에 에러가 발생했습니다. 다시 시도하세요. <${error.message}>`);
        });
      }

      LoadTable = async() => {
        debugger
        const scatter = ScatterJS.scatter;
        const eosOptions = {
          expireInSeconds: 60
        };
        // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
        const eos = scatter.eos(network, Eos, eosOptions);
        
       await eos.getTableRows({
          json: true,
          code: "contractmngm",
          scope: "contractmngm",
          table: "contracts",
          lower_bound: this.state.name,
          limit: 1
        })
        .then(res => {
          console.log("getTableRows result : " + res);
          console.log("get Title : "+res.rows[0].title);
          
          this.setState({ 
            ...this.state,
            contractTitle:res.rows[0].title
          });
          console.log(this.state.contractTitle);
          return this.state.contractTitle;
        })
        .catch(error =>{
          this.setState({...this.state,
            contractTitle: "등록된 계약이 없습니다."
          });
          console.error(error);
          return error;
          //alertify.error(`There seems to be an error with Your Transaction. Please Try Again Later ${error.message}`);
        });
      }


      Erase = async (username, receiver) => {
        debugger;
        const scatter = ScatterJS.scatter;
        const eosOptions = {
          expireInSeconds: 60
        };
        // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
        const eos = scatter.eos(network, Eos, eosOptions);
        
       await eos.transaction({
        actions: [{
          account: receiver,
          name: 'erase',
          authorization: [{
            actor: username,
            permission: 'active',
          }],
          data: {
            user: username
            },
          }]
        }).then(trx => {
          // That's it!
          console.log(`Transaction ID: ${trx.transaction_id}`);
          alertify.success(`계약서가 성공적으로 삭제되었습니다.`);
          console.log('삭제 성공');
          this.setState({
            msg: `transaction made!!`
          });
        }).catch(error => {
          debugger;
          console.error('삭제 실패 : '+error.message);
          alertify.error(`트랜잭션에 에러가 발생했습니다. 다시 시도하세요. <${error.message}>`);
        });
      }


      getScatterInfo = () => {
        let warning = "Please Install Scatter or unlock Scatter if it is already installed.";
        if (this.state.isScatterInstalled) {
          return ( 
            <Connect enroll={this.Enroll} connectToScatter = {this.Connect} status = {this.state.status} username = {this.state.name} disconnect = {this.Disconnect} loadTable={this.LoadTable} contractTitle={this.state.contractTitle} erase={this.Erase}/>
          )
        } else {
          return ( 
            <div >
              <h4 > {warning} </h4> 
            </div> 
          )
        }
      }


      render(){
        
          const getScatterInfo = this.getScatterInfo();
          return(
             [getScatterInfo]
          )
      }
}

export default Scatter;