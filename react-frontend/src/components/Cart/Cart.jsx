import {MdArrowBack, MdShoppingCart} from "react-icons/md";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ItemContent from "./ItemContent.jsx";
import CartEmpty from "./CartEmpty.jsx";
import {formatPrice} from "../../utils/formatPrice.js";


const Cart =() => {

    const dispatch = useDispatch();
    const {cart} = useSelector((state) => state.carts);
    const newCart = {...cart };
    console.log(newCart);

    newCart.totalPrice = cart?.reduce((acc, item) => acc + Number(item?.specialPrice) * Number(item?.quantity), 0);

    if (!cart || cart.length === 0) {
        return <CartEmpty />;
    }

    return (
        <div className={"lg:px-14 sm:px-8 px-4 py-10"}>
            <div className={"flex flex-col items-center mb-12"}>
                <h1 className={"text-slate-900 text-4xl font-bold flex items-center gap-3"}>
                    <MdShoppingCart size={36} className={"text-gray-700"}/>
                    Your Cart
                </h1>
                <p className={"text-slate-700 text-lg mt-2"}>
                    All your selected items.
                </p>
            </div>

            <div className={"grid md:grid-cols-5 grid-cols-4 gap-4 pb-2 font-semibold items-center"}>
                <div className={"md:col-span-2 justify-self-start text-lg text-slate-800 lg:ps-4"}>
                    Product
                </div>
                <div className={"justify-self-center text-lg text-slate-800 lg:ps-4"}>
                    Price
                </div>
                <div className={"justify-self-center text-lg text-slate-800 lg:ps-4"}>
                    Quantity
                </div>
                <div className={"justify-self-center text-lg text-slate-800 lg:ps-4"}>
                    Total
                </div>
            </div>

            <div>
                {cart && cart.length > 0 && cart.map((item, i) => <ItemContent key={i} {...item} />)}
            </div>

            <div className={"border-t-[1.5px] border-slate-200 py-4 flex sm:flex-row sm:px-0 px-2 flex-col sm:justify-between gap-4"}>
                <div></div>
                <div className={"flex text-sm gap-1 flex-col"}>
                    <div className={"flex justify-between w-full md:text-lg text-sm font-semibold"}>
                        <span>Subtotal</span>
                        <span>{formatPrice(newCart?.totalPrice)}</span>
                    </div>

                    <p className={"text-slate-500 font-semibold"}> Taxes and shipping calculated at checkout </p>
                    <Link className={"w-full flex justify-end "} to={"/checkout"}>
                        <button
                            onClick={() => {}}
                            className={"font-semibold w-[300px] py-2 px-4 rounded-sm " +
                                "bg-blue-950 text-white hover:bg-blue-800 transition duration-500 ease-in-out transform flex justify-center items-center gap-2"}
                        >
                            <MdShoppingCart size={20}/>
                            Checkout
                        </button>
                    </Link>
                    <Link className={"flex gap-2 items-center mt-2 text-slate-500"} to={"/products"}>
                        <MdArrowBack />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Cart;