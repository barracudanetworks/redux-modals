// types
let types = {
    SET_ACTIVE: "SET_ACTIVE",
    SET_INACTIVE: "SET_INACTIVE"
};

// namespace types
for (let key in types) {
    types[key] = `@@redux-modals/${types[key]}`;
}

// actions
function setActive(modalName) {
    return {
        type: types.SET_ACTIVE,
        modalName
    };
}

function setInactive(modalName) {
    return {
        type: types.SET_INACTIVE,
        modalName
    };
}

export {
    setActive,
    setInactive,
    types
}
