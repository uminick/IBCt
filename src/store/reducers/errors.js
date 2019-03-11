import {REMOVE_ERROR, ADD_ERROR} from '../actionTypes';

//create a default state for errors handling
export default (state = {message:null}, action)=>{
    switch(action.type){
        case ADD_ERROR:
            return {...state,message:action.error};

        case REMOVE_ERROR:
            return {...state, message:null};

        default:
            return state;
    }
}