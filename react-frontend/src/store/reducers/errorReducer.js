const initialState = {
    isLoading: false,
    errMessage: null,
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
    }
    return state;
}