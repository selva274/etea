export const initialState = {
    tea: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                tea: [...state.tea, action.item],
            }
    }
}

export default reducer;