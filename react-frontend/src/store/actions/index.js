import api from "../../API/api"
import toast from "react-hot-toast";

export const fetchProducts = (queryString) => async (dispatch) => {
    try {
        dispatch({ type: "IS_FETCHING" });
        const { data } = await api.get(`/public/products?${queryString}`);
        dispatch({
            type: "FETCH_PRODUCTS",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });
        dispatch({ type: "IS_SUCCESS" });
    } catch (error) {
        console.log(error);
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch products",
        });
    }
};
export const fetchCategories = () => async (dispatch) => {
    try {
        dispatch({ type: "CATEGORY_LOADER" });
        const { data } = await api.get(`/public/categories`);
        dispatch({
            type: "FETCH_CATEGORIES",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });
        dispatch({ type: "CATEGORY_SUCCESS" });
    } catch (error) {
        console.log(error);
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch categories",
        });
    }
};

export const addToCart = (data, qty = 1, toast) => {
    return (dispatch, getState) => {

        // Find the product

        const { products } = getState().products;
        const getProduct = products.find(
            (item) => item.productId === data.productId
        );

        // check for product stock
        const isQuantityAvailable = getProduct.quantity >= qty;
        if (isQuantityAvailable) {
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    ...data,
                    quantity: qty,
                }
            });
            toast.success(`Added 1 ${getProduct.productName} to cart!`);
            localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));

        } else {
            // error
            toast.error(`Sorry, only ${getProduct.quantity} ${getProduct.productName} in stock!`);
        }

        // If in stock -> add to cart

        // if not in stock -> show an error message

    };
}
export const increaseCartQuantity =
    (data, toast, currentQuantity, setCurrentQuantity) =>
        (dispatch, getState) => {
            const { products } = getState().products;
            const getProduct = products.find(
                (item) => item.productId === data.productId
            );
            const isQuantityAvailable = getProduct.quantity >= currentQuantity + 1;

            if (isQuantityAvailable) {
                const newQuantity = currentQuantity + 1;
                setCurrentQuantity(newQuantity);

                dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                        ...data,
                        quantity: newQuantity + 1,
                    }
                })
                toast.success(`Added 1 ${getProduct.productName} to cart!`);
                localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
            } else {
                toast.error(`Sorry, only ${getProduct.quantity} ${getProduct.productName} in stock!`);
            }
};

export const decreaseCartQuantity =
    (data, newQuantity) => (dispatch, getState) => {
            dispatch({
                type: "DECREASE_CART_QUANTITY",
                payload: {
                    ...data,
                    quantity: newQuantity,
                }
            });
            toast.success(`Removed 1 ${data.productName} from cart!`);
            localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
        }

export const removeFromCart = (data, toast) => (dispatch, getState) => {
    dispatch({type: "REMOVE_ITEM_FROM_CART", payload: data,});
    toast.success(`Removed ${data.productName} from cart!`);
    localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
}

