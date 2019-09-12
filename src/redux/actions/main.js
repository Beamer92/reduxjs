export const actionType = {
    CHANGE_NAME: "CHANGE_NAME",
    CHANGE_BGCOLOR: "CHANGE_BGCOLOR",
    CHANGE_BORDER: "CHANGE_BORDER",
    TOGGLE_PICTURE: "TOGGLE_PICTURE",
    UPDATE_TIME: "UPDATE_TIME"
}

export function changeName(payload){
    return {
        type: actionType.CHANGE_NAME, 
        name: payload
    }
};

export function changeBackgroundColor(payload){
    return{
        type: actionType.CHANGE_BGCOLOR,
        backgroundColor: payload
    }
};

export function changeToggle(payload){
    return {
        type: actionType.TOGGLE_PICTURE
    }
}

export function changeTime(payload){
    return {
        type: actionType.UPDATE_TIME
    }
}

