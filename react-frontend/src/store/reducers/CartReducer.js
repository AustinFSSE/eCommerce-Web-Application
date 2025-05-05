

const initialState = {
    cart: [],
    totalPrice: 0,
    cartId: null,
}
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const product = action.payload;
            const existingProduct = state.cart.find(
                (item) => item.productId === product.productId
            );
            if (existingProduct) {
                const updatedProduct = state.cart.map((item) => {
                    if (item.productId === product.productId) {
                        return product;
                    } else {
                        return item;
                    }
                });
                return {
                    ...state,
                    cart: updatedProduct,
                };
            } else {
                const newCart = [...state.cart, product];
                return {
                    ...state,
                    cart: newCart,
                };
            }
        }
        default:
            return state;
    }
}