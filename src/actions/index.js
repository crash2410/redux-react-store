const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
};

const menuRequsted = () => {
    return {
        type: 'MENU_REQUSTED'
    }
};

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}

export {
    menuLoaded,
    menuRequsted,
    menuError
};