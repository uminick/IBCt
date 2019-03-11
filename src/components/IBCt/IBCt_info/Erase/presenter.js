import React from 'react';
import {Button} from 'reactstrap';

const Erase= props => [
    <div className="col-auto">
        <Button outline color="primary" onClick={props.handleErase}>ERASE</Button>
    </div>
]

export default Erase;