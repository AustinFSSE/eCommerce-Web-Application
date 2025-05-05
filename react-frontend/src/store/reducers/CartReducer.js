

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
        case "DECREASE_CART_QUANTITY": {
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.productId !== action.payload
                ),
                totalPrice: state.totalPrice - action.payload.price,
                cartId: action.payload.cartId,
            };
        }
        case "REMOVE_ITEM_FROM_CART": {
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.productId !== action.payload.productId
                )
            }
        }
        default:
            return state;
    }
}