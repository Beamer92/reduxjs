export const actionType = {
    CHANGE_NAME: "CHANGE_NAME"
}

export function changeName(payload){
    return {
        type: actionType.CHANGE_NAME, 
        name: payload
    }
};