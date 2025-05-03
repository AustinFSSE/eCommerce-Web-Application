import HeroBanner from "./HeroBanner.jsx";
import ProductCard from "../shared/ProductCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchProducts} from "../../store/actions/index.js";
import Loader from "../shared/Loader.jsx";
import {FaExclamationTriangle} from "react-icons/fa";


const Home = () => {

    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);
    const [errorMessage] = useState()
    const [isLoading] = useState()

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])
    return (
        <div className={"lg:px-14 sm: px-8"}>
            <div className={"py-6"}>
                <HeroBanner />
            </div>

            <div className={"py-5"}>
                <div className={"flex flex-col justify-center items-center space-y-2"}>
                    <h1 className={"text-slate-700 text-4xl font-bold text-center"}>Products</h1>
                        <span className={"text-slate-700"}>
                            Discover our handpicked selection of top-rated products just for you!
                        </span>
                </div>

                {isLoading
                    ? ( <Loader /> )
                    : errorMessage ? (
                        <div className={"flex items-center justify-center h-[200px]"}>
                            <FaExclamationTriangle className={"text-slate-800 text-3xl mr-2"}/>
                            <span className={"text-slate-800 text-lg font-medium"}>
                                {errorMessage}
                            </span>
                        </div>
                    ) : (
                        <div className={"pb-6 pt-24 grid 2xl:grid-cols-4 lg:grid-cols-5 sm:grid-cols-2 gap-y-6 gap-x-6"}>
                            {products &&
                                products?.slice(0,10).map((item, i) => <ProductCard key={i} {...item} />)}
                        </div>
                    )
                }
            </div>
        </div>
    );
}
export default Home;