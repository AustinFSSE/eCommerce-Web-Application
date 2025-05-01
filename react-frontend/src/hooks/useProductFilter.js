import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../store/actions/index.js";


const useProductFilter = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {

        const params = new URLSearchParams();

        const currentPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
        params.set("pageNumber", currentPage - 1);

        const sortOrder = searchParams.get("sortBy") || "asc";
        const categoryParams = searchParams.get("category") || "";
        const keyword = searchParams.get("keyword") || "";
        params.set("sortBy", "price");
        params.set("sortOrder", sortOrder);
        params.set("category", categoryParams);
        params.set("keyword", keyword);

        if (categoryParams) {
            params.set("category", categoryParams);
        }
        if (keyword) {
            params.set("keyword", keyword);
        }

        const queryString = params.toString();
        console.log("QUERY STRING: " + queryString);

        dispatch(fetchProducts(queryString));

    }, [dispatch, searchParams]);


};
export default useProductFilter;












