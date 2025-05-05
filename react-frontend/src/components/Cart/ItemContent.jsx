import {useState} from "react";
import {HiOutlineTrash} from "react-icons/hi";
import SetQuantity from "./SetQuantity.jsx";
import {useDispatch} from "react-redux";
import {decreaseCartQuantity, increaseCartQuantity, removeFromCart} from "../../store/actions/index.js";
import toast from "react-hot-toast";
import {formatPrice} from "../../utils/formatPrice.js";
import truncateText from "../../utils/truncateText.js";


const ItemContent = ({
         image,
         productName,
         description,
         quantity,
         price,
         discount,
         specialPrice,
         productId,
     }) => {
        const [currentQuantity, setCurrentQuantity] = useState(quantity);
        const dispatch = useDispatch();

        const handleQuantityIncrease = (cartItems) => {
          dispatch(increaseCartQuantity(
              cartItems,
              toast,
              currentQuantity,
              setCurrentQuantity
          ));
        };
    const handleQuantityDecrease = (cartItems) => {
        if (currentQuantity > 1) {
          const newQuantity = currentQuantity - 1;
          setCurrentQuantity(newQuantity);
            dispatch(decreaseCartQuantity(cartItems, newQuantity));
        }
    };
    const removeItemFromCart = (cartItems) => {
        dispatch(removeFromCart(cartItems, toast));
    };

        return (
            <div className={"grid md:grid-cols-5 grid-cols-4 md:text-md text-sm gap-4 items-center border-[1px] border-slate-200 lg:px-4 py-4 p-2"}>
                <div className={"md:col-span-2 justify-self-start flex flex-col gap-2"}>
                    <div className={"flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start"}>
                        <h3 className={"lg:text-[17px] text-sm font-semibold text-slate-600"}>
                            {truncateText(productName)}
                        </h3>
                    </div>
                    <div className={"flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start md:w-36 sm:w-24 w-12"}>
                        <img
                            src={image}
                            alt={productName}
                            className={"md:h-36 sm:h-24 h-12 w-full object-cover rounded-md"}
                        />
                    </div>

                    <div className={"flex items-start gap-5 mt-3"}>
                        <button
                            onClick={() => removeItemFromCart(
                                {
                                    image,
                                    productName,
                                    description,
                                    quantity,
                                    price,
                                    discount,
                                    specialPrice,
                                    productId,
                                }
                            )}
                            className={"flex items-center font-semibold space-x-2 px-4 py-1 text-xs border " +
                                "border-rose-600 text-rose-800 rounded-md hover:bg-rose-600 hover:text-white transition duration-300 ease-in-out transform"}
                        >
                            <HiOutlineTrash className={"mr-2"} size={20} />
                            Remove
                        </button>
                    </div>
                </div>
                <div className={"justify-self-center lg:text-[17px] text-sm font-semibold text-slate-600"}>
                    {formatPrice(Number(specialPrice), "USD")}
                </div>
                <div className={"justify-self-center lg:text-[17px] text-sm font-semibold text-slate-600"}>
                    <SetQuantity
                        quantity={currentQuantity}
                        cardCounter={true}
                        handleQuantityIncrease={() => handleQuantityIncrease(
                            {
                                image,
                                productName,
                                description,
                                quantity,
                                price,
                                discount,
                                specialPrice,
                                productId,
                            }
                        )}
                        handleQuantityDecrease={() => handleQuantityDecrease(
                            {
                                image,
                                productName,
                                description,
                                quantity,
                                price,
                                discount,
                                specialPrice,
                            }
                        )}
                    />
                </div>
                <div className={"justify-self-center lg:text-[17px] text-sm font-semibold text-slate-600"}>
                    {formatPrice(Number(Number(currentQuantity) * Number(specialPrice)).toFixed(2), "USD")}
                </div>
            </div>
        );
}
export default ItemContent;