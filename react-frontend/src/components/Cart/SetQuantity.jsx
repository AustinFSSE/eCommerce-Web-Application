

const btnStyles = "border-[1.2px] border-slate-200 rounded-md px-3 py-1 text-xs font-semibold";

const SetQuantity = ({
        quantity,
        cardCounter,
        handleQuantityIncrease,
        handleQuantityDecrease,
     }) => {
    return (
        <div className={"flex gap-8 items-center"}>
            {cardCounter ? null :
                <div className={"font-semibold text-slate-800"}>
                Quantity: {quantity}
                </div>
            }
            <div className={"flex md:flex-row flex-col gap-4 items-center lg:text-[22px] text-sm"}>
                <button
                    className={btnStyles}
                    disabled={quantity <= 1}
                    onClick={() => handleQuantityDecrease()}
                >
                    -
                </button>

                <div className={"text-red-500"}>
                    {quantity}
                </div>

                <button
                    className={btnStyles}
                    onClick={() => handleQuantityIncrease()}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default SetQuantity;