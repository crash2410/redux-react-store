const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    totalPrice: 0,
    sendItemsFromCart: []
}

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true,
            };
        case 'MENU_ERROR':
            return {
                ...state,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const indx = state.items.findIndex(item => item.id === id);
            const itemInCart = state.items[indx];
            let newItem;
            if (itemInCart) {
                newItem = {
                    ...itemInCart,
                    price: itemInCart.price + 1 * item.price,
                    count: itemInCart.count + 1
                }
            } else {
                newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    count: 1
                };
            }

            if (indx === -1) {
                return {
                    ...state,
                    items: [
                        ...state.items,
                        newItem
                    ],
                }
            } else {
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, indx),
                        newItem,
                        ...state.items.slice(indx + 1)
                    ]
                };
            }
        case 'ALL_ITEM_REMOVE_FROM_CART': {
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            }
        }
        case'ITEM_REMOVE_FROM_CART': {
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const indx = state.items.findIndex(item => item.id === id);
            const itemInCart = state.items[indx];

            let newItem;
            if (itemInCart) {
                newItem = {
                    ...itemInCart,
                    price: itemInCart.price - 1 * item.price,
                    count: itemInCart.count - 1
                }
            }

            if (newItem.count === 0) {
                return {
                    ...state,
                    items: [...state.items.slice(0, indx), ...state.items.slice(indx + 1)]
                };
            }

            return {
                ...state,
                items: [
                    ...state.items.slice(0, indx),
                    newItem,
                    ...state.items.slice(indx + 1)
                ],
            };
        }
        case 'UPDATE_TOTAL_PRICE':
            let totalPrice = 0;
            for (let i = 0; i < state.items.length; i++) {
                totalPrice += state.items[i].price;
            }

            return {
                ...state,
                totalPrice
            }
        case 'SENDING_ITEMS_FROM_CART': {
            let newArray = state.items;

            return {
                ...state,
                sendItemsFromCart: [
                    ...state.sendItemsFromCart,
                    newArray
                ],
                items: [],
                totalPrice: 0
            }
        }

        default:
            return state;
    }
}

export default reducer;