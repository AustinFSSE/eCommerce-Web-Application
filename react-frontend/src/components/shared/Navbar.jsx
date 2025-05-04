import {Link, useLocation} from "react-router-dom";
import {FaShoppingCart, FaSignInAlt, FaStore} from "react-icons/fa";
import {CgShoppingCart} from "react-icons/cg";
import {Badge} from "@mui/material";
import {useState} from "react";
import {RxCross2} from "react-icons/rx";
import {IoIosMenu} from "react-icons/io";


const Navbar = () => {
    const path = useLocation().pathname;

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className={"h-[80px] bg-blue-950 text-white z-50 flex items center sticky top-0"}>
            <div className={"lg:px-14 sm:px-8 px-4 w-full flex justify-between"}>
                <Link to={"/"} className={"flex items-center text-2xl font-bold"}>
                    <FaStore className={"mr-2 text-3xl"}/>
                    <span className={"font-[Poppins]"}>
                        E-Commerce Store
                    </span>
                </Link>
                <ul className={`flex sm:gap-10 gap-4 sm:items-center  text-slate-950 sm:static absolute left-0 top-[70px] sm:shadow-none shadow-md ${
                    navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
                }  transition-all duration-100 sm:h-fit sm:bg-none bg-blue-950   text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}>
                    <li className={"font-[500] transition-all duration-150 py-5 px-4"}>
                        <Link to={"/"} className={`${path === "/" ? "text-white font-bold" : "text-blue-300"}`}>
                            Home
                        </Link>
                    </li>
                    <li className={"font-[500] transition-all duration-150 py-5 px-4"}>
                        <Link to={"/products"} className={`${path === "/products" ? "text-white font-bold" : "text-blue-300"}`}>
                            Products
                        </Link>
                    </li>
                    <li className={"font-[500] transition-all duration-150 py-5 px-4"}>
                        <Link to={"/about"} className={`${path === "/about" ? "text-white font-bold" : "text-blue-300"}`}>
                            About
                        </Link>
                    </li>
                    <li className={"font-[500] transition-all duration-150 py-5 px-4"}>
                        <Link to={"/contact"} className={`${path === "/contact" ? "text-white font-bold" : "text-blue-300"}`}>
                            Contacts
                        </Link>
                    </li>

                    <li className={"font-[500] transition-all duration-150 py-5 px-4"}>
                        <Link to={"/cart"} className={`${path === "/cart" ? "text-white font-bold" : "text-blue-300"}`}>
                            <Badge
                                showZero={true}
                                badgeContent={0}
                                color="primary"
                                overlap={"circular"}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                className={"flex items-center"}
                            >
                                <FaShoppingCart size={25} className={"mr-2"}/>
                            </Badge>
                        </Link>
                    </li>
                    <li className={"font-[500] transition-all duration-150 py-5 px-4"}>
                        <Link to={"/login"} className={"" +
                            "flex items-center space-x-2 px-4 py-[5px] bg-gradient-to-r from-purple-600 to-red-500 " +
                            "text-white font-semibold rounded-md shadow-lg hover:from-purple-500 hover:to-red-400 hover:shadow-xl transition duration-300 ease-in-out transform"}>
                            <FaSignInAlt size={25} className={"mr-2"}/>
                            <span className={"font-[Poppins]"}>Login</span>
                        </Link>
                    </li>
                </ul>

                <button className={"sm:hidden flex items-center sm:mt-0 mt-2 bg-blue-950"} onClick={() => setNavbarOpen(!navbarOpen)}>
                    {navbarOpen ? (
                            <RxCross2 className={"text-3xl text-white"}/>
                    ) : (
                            <IoIosMenu className={"text-3xl text-white"}/>
                    )}
                </button>
            </div>
        </div>
    );
}

export default Navbar;