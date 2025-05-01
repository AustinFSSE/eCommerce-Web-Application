import {useState} from "react";
import {FaShoppingCart} from "react-icons/fa";
import ProductViewModal from "./ProductViewModal.jsx";
import truncateText from "../../utils/truncateText.js";

const ProductCard = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
 }) => {

    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const btnLoader = false;
    const [selectedViewProduct, setSelectedViewProduct] = useState(false);
    const isAvailable = quantity && Number(quantity) > 0;

    const handleProductView = (product) => {
        setSelectedViewProduct(product);
        setOpenProductViewModal(true);
    }

    return (
      <div className={"rounded-lg shadow-xl overflow-hidden transition-shadow duration-300"}>
          <div onClick={() => {
              handleProductView({
                 id: productId,
                  productName,
                  image,
                  description,
                  quantity,
                  price,
                  discount,
                  specialPrice,
              })
          }} className={"w-full overflow-hidden aspect-[3/2]"}>
            <img className={"w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"} src={image} alt={productName}/>
          </div>
          <div className={"p-4"}>
              <h2 onClick={() => {
                  handleProductView({
                      id: productId,
                      productName,
                      image,
                      description,
                      quantity,
                      price,
                      discount,
                      specialPrice,
                  })
              }} className={"text-slate-800 text-xlg font-semibold mb-2 cursor-pointer"}>
                  {truncateText(productName, 18)}
              </h2>
              <div className={"min-h-20 max-h-20"}>
                  <p className={"text-gray-600 text-sm"}>{truncateText(description, 80)}</p>
              </div>
              <div className={"flex items-center justify-between"}>
                  {specialPrice ? (
                      <div className={"flex flex-col"}>
                        <span className={"text-gray-400 line-through"}>
                            ${Number(price).toFixed(2)}
                        </span>
                          <span className={"text-xl text-slate-700 font-semibold"}>
                            ${Number(specialPrice).toFixed(2)}
                        </span>
                      </div>
                      ) : (
                          <span className={"text-xl font-semibold text-slate-800"}>
                              {" "}
                            ${Number(price).toFixed(2)}
                          </span>
                  )}
                  <button
                      disabled={!isAvailable || btnLoader}
                      className={`bg-blue-500
                          ${isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70"}
                          text-white text-sm py-2 px-3 rounded-lg items-center transition-colors duration-300 w-36 flex justify-center
                          `} onClick={() => {
                      handleProductView({
                          id: productId,
                          productName,
                          image,
                          description,
                          quantity,
                          price,
                          discount,
                          specialPrice,
                      })
                  }}>
                      <FaShoppingCart className={"mr-2"}/>
                          {isAvailable ? "Add to Cart" : "Out of Stock"}
                  </button>
              </div>
          </div>
          <ProductViewModal
          open={openProductViewModal}
          setOpen={setOpenProductViewModal}
          product={selectedViewProduct}
          isAvailable={isAvailable}
          />
      </div>
    )
}

export default ProductCard;