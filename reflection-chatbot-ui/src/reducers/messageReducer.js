import { FETCH_MESSAGES, SEND_MESSAGE, SET_LOADING } from '../actions/types';

const initialState = {
    messages: [{ id: 1, sender: 'Bot', receiver: 'User', message: 'Choose a value to begin: \n 1. Achievement \n 2. Family \n 3. Fun/Adventure \n 4. Physical Health \n 5. Minfulness/ Mental Health \n 6. Independence \n 7. Purpose \n 8. Self-esteem \n 9. Wealth \n10. Friendship \n11. Virtue / Morality \n12. Romance \n13. Responsibility \n14. Knowledge \n15. Acceptance' }],
    numMsgs: 1,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MESSAGES:
            return {
                ...state,
                items: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SEND_MESSAGE:
            let num = state.numMsgs;
            return {
                ...state,
                numMsgs: state.numMsgs + 2,
                loading: false,
                messages: [...state.messages, { ...action.userMsg, id: num + 1 }, { ...action.botMsg, id: num + 2 }]
            };
        default:
            return state;
    }
}