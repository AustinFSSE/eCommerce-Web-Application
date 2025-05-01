import ProductCard from "../shared/ProductCard.jsx";
import {FaExclamationTriangle} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import Filter from "./Filter.jsx";
import useProductFilter from "../../hooks/useProductFilter.js";
import {useEffect} from "react";
import {fetchCategories} from "../../store/actions/index.js";
import Loader from "../shared/Loader.jsx";
import Paginations from "../shared/Paginations.jsx";


const Products = () => {
    const { isLoading, errMessage } = useSelector(
        (state) => state.error,
    )

    const { products, categories, pagination } = useSelector(
        (state) => state.products
    )
    const dispatch = useDispatch();
    useProductFilter();

    console.log(products);
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
      <div className="mt-30 pb-6 pt-24 grid lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
          <Filter categories={categories ? categories : []}/>
          {isLoading ? (
              <div>
                  <Loader text={"Products are being generated"}/>
              </div>
              ) : errMessage ? (
                    <div className={"flex items-center justify-center h-[200px]"}>
                        <FaExclamationTriangle className={"text-slate-800 text-3xl mr-2"}/>
                        <span className={"text-slate-800 text-lg font-medium"}>
                            {errMessage}
                        </span>
                    </div>
                ) : (<div className={"min-h-[700px]"}>
                        <div className={"pb-6 pt-24 grid 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6"}>
                            {products && products.map(
                                (item, i) => <ProductCard key={i} {...item} />
                            )}
                        </div>
                        <div className={"flex justify-center pt-10"}>
                            <Paginations numberOfPage = {pagination?.totalPages}
                                        totalProducts = {pagination?.totalElements}/>
                        </div>
                </div>
                )
          }
      </div>
    );
}

export default Products;