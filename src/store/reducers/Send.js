import {SEND} from '../actionTypes';
const initialState={
    clicked:false
}

const send=(state=initialState,action) =>{
    switch(action.type){
        case SEND:
            return{...state,clicked:true}
        default:
    return state;
    }
    
}

export default send;