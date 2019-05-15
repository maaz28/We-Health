import { CONTACT_EDIT_DATA } from "../actions/root.action";

const INITIAL_STATE = {
    contact_data : {}
} 

export default (state = INITIAL_STATE, action) => {
    console.log('====================================');
    console.log(action.payload);
    console.log('====================================');
    switch (action.type) {
        case CONTACT_EDIT_DATA:
        return({
            ...state,
            contact_data : action.payload
        })
        default: 
        return state
    }
}