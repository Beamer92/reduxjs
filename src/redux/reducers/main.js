import { actionType } from "../actions/main";
import {combineReducers} from 'redux';
import {initialStyles} from '../initialStyles'

const name = (state = "The Dude", action) => {
    switch (action.type){
        case actionType.CHANGE_NAME:
            let name = action.name.length > 0 ? action.name : state;
            return name
        default:
            return state;
    }
}

const pictureToggle = (state = false, action) => {
    switch(action.type){
        case actionType.TOGGLE_PICTURE:
            return !state;
        default:
            return state;
    }
    
} 

const styles = (state = initialStyles, action) => {
    switch (action.type){

        case actionType.CHANGE_BGCOLOR:
            let color = action.backgroundColor ? action.backgroundColor : state.backgroundColor
            return {
                ...state,
                backgroundColor: color
                }

        case actionType.CHANGE_BORDER:
            return {
                ...state,
                border: action.border
                }

        default:
            return state;
    }
}

const time = (state = new Date().toLocaleTimeString(), action) => {
    switch(action.type){
        case actionType.UPDATE_TIME:
            return new Date().toLocaleTimeString();
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    name: name,
    styles: styles,
    pictureToggle: pictureToggle,
    time: time
})

export default rootReducer;