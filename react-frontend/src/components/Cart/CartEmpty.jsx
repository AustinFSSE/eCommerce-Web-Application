import {MdArrowBack, MdShoppingCart} from "react-icons/md";
import {Link} from "react-router-dom";


const CartEmpty = () => {
    return (
        <div className={"min-h-[800px] flex flex-col items-center justify-center "}>
            <div className={"flex flex-col items-center"}>
                <MdShoppingCart size={80} className={"mb-4 text-slate-800"}/>
                <div className={"text-slate-800 font-bold text-3xl"}>
                    Your cart is empty
                </div>
                <div className={"text-slate-500 text-lg mt-2"}>
                    Add some products to get started!
                </div>
            </div>
            <div className={"mt-6"}>
                <Link to={"/products"} className={"flex gap-2 items-center text-blue-400 hover:text-blue-700 transition duration-600 ease-in-out transform"}>
                    <MdArrowBack size={20}/>
                    <span className={"font-medium"}>Start Shopping</span>
                </Link>
            </div>
        </div>
    );
}

export default CartEmpty;