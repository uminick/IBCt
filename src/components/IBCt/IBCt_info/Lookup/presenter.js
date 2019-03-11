import React from 'react';
import {Button} from 'reactstrap';

const Lookup= props => [
    <div className="col-auto">
        <Button outline color="primary" onClick={props.getTitleBtn}>LOOKUP</Button>
{/*         <button onClick={props.getTitleBtn} className="btn btn-primary" >계약명 조회</button> */}
        <br />
{/*         {" 계약명 : "}
        {props.contractTitle||"조회를 클릭하세요."} */}
    </div>
]

export default Lookup;