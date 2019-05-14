import { LOGGEDIN, LOGGED_OUT } from "../actions/root.action";

const INITIAL_STATE = {
    email : '',
    is_login : false,
    token : ''
} 

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGGEDIN:
        return({
            ...state,
            email : action.payload.user.email,
            token : action.payload.token,
            is_login : true
        })
        case LOGGED_OUT:
        return({ 
            ...state,
            is_login : false
        })
        default: 
        return state
    }
}