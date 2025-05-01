const initialState = {
    isLoading: false,
    errMessage: null,
    categoryLoader: false,
    categoryError: null,
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "IS_FETCHING":
            return {
                ...state,
                isLoading: true,
                errMessage: null,
            };
        case "IS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                errMessage: null,
            };
        case "IS_ERROR":
            return {
                ...state,
                isLoading: false,
                errMessage: action.payload,
            };
        case "CATEGORY_SUCCESS":
            return {
                ...state,
                categoryLoader: false,
                categoryError: null,
            };
        case "CATEGORY_LOADER":
            return {
                ...state,
                categoryLoader: true,
            };
    }
    return state;
}