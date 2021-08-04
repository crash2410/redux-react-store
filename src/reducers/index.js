const inisialState = {
    menu: [],
    loading: true,
    error: false
}

const reducer = (state = inisialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                    loading: false,
                    error: false
            };
        case 'MENU_REQUSTED':
            return {
                menu: state.menu,
                    loading: true,
                    error: false
            };
        case 'MENU_ERROR':
            return {
                menu: state.menu,
                    loading: true,
                    error: true
            };
        default:
            return state;
    }
}

export default reducer;