const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
};

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
};

const deleteFromCart = (id) => {
    return {
        type: 'ALL_ITEM_REMOVE_FROM_CART',
        payload: id
    }
}

const deleteItemFromCart = id => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}

const updateTotalPrice = () => {
    return {
        type: 'UPDATE_TOTAL_PRICE',
    }
}

const sendingItemsFromCart = () => {
    return {
        type: 'SENDING_ITEMS_FROM_CART',
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart,
    deleteItemFromCart,
    updateTotalPrice,
    sendingItemsFromCart
};