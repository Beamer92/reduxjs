import { actionType } from "../actions/main";
import {combineReducers} from 'redux';

const name = (state = "The Dude", action) => {
    switch (action.type){
        case actionType.CHANGE_NAME:
            let name = action.name.length > 0 ? action.name : state;
            return name
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    name: name
})

export default rootReducer;