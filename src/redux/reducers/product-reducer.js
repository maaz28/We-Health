import { EVENT_DETAILS } from "../actions/event-actions";
import { EDIT_OBJ } from "../actions/root.action";

const INITIAL_STATE = {
edit_obj : {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EVENT_DETAILS:
        return({
            ...action.payload
        })
        case EDIT_OBJ : 
        return({
            edit_obj : action.payload
        })
        default: 
        return state
    }
}