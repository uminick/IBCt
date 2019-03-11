import {SET_CURRENT_USER} from '../actionTypes';

const DEFAULT_STATE={
    isAuthenticated:false, //true when logged in
    logout:null,
    user:""

}

export default (state=DEFAULT_STATE,action) =>{
    switch(action.type){
        case SET_CURRENT_USER:
        return{
            //turn into false when user is empty, and true when is not
            isAuthenticated:!state.isAuthenticated,
            user:action.user,
            logout:'Log Out'
        };
        default:
            return state;
    }
}