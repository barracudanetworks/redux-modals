import { types } from "./actions";

export default function modalReducer(state={ active: [] }, action) {
    switch(action.type) {
    case types.SET_ACTIVE:
        if (state.active.indexOf(action.modalName) === -1) {
            return Object.assign({}, state, {
                active: [ ...state.active, action.modalName ]
            });
        }
        return state;

    case types.SET_INACTIVE:
        const position = state.active.indexOf(action.modalName);
        if (position !== -1) {
            return Object.assign({}, state, {
                active: [
                    ...state.active.slice(0, position),
                    ...state.active.slice(position + 1)
                ]
            });
        }
        return state;

    default:
        return state;
    }
}
