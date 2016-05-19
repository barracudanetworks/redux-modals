import * as actions from "./actions";
import modalsReducer from "./reducer";

export default {
    ...actions,
    modals: modalsReducer
};
