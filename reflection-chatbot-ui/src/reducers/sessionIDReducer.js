let sessID = 'u_'+Date.now();
const initialState = {
    sessionID: sessID
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}