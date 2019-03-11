import React from 'react';
import Enroll from './Enroll';
import Lookup from './Lookup';
import Erase from './Erase';
import './App.css';
const IbI= props => [
    <div className="row top_menu">

    <div className="col-sm-12">
        <div className="row">
            <div className="center-block">
                <h1> IBCt : I Believe Contract</h1>
                <h4 calssName="name"> {props.username}님. 로그인 하셨습니다. </h4>
                <br /><br /><br />
                <div className="row functions">
                    <Enroll {...props} />
                    <Lookup {...props} />
                    <Erase {...props} />
                </div>
                <br /><br />
                <h3>{"계약명"}</h3>
                {props.contractTitle||"조회를 클릭하세요."}
            </div>
        </div>
    </div>
</div>

]

export default IbI;