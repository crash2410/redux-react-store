const inisialState = {
    menu: []
}

const reducer = (state = inisialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload
            };
        default:
            return state;
    }
}

export default reducer;