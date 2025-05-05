import {FaEnvelope, FaPhone} from "react-icons/fa";
import {GiStopSign} from "react-icons/gi";


const Contact = () => {
    return (
        <div className={"flex flex-col justify-center items-center min-h-screen py-12 bg-cover bg-center bg-gray-100"}>
            <div className={"bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"}>
                <h1 className={"text-4xl font-bold text-center mb-6"}>Contact us!</h1>
                <p className={"text-center text-gray-600 mb-4"}>
                    We would love to hear from you! Please fill out the form below or contact us below!
                </p>

                <form className={"space-y-4"}>
                    <div className={"flex flex-col space-y-2"}>
                        <label className={"block text-sm text-gray-700 font-md mb-2"} htmlFor={"name"}>
                            Name
                        </label>
                        <input type={"text"} className={"w-full px-4 py-2 border border-gray-500 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"} required/>
                        <label className={"block text-sm text-gray-700 font-md mb-2"} htmlFor={"name"}>
                            Email
                        </label>
                        <input type={"text"} className={"w-full px-4 py-2 border border-gray-500 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"} required/>
                        <label className={"block text-sm text-gray-700 font-md mb-2"} htmlFor={"name"}>
                            Message
                        </label>
                        <textarea
                            rows={5}
                            required
                            className={"w-full px-4 py-2 border border-gray-500 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"}
                        />
                    </div>
                    <button className={"w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform"} type={"submit"}>
                        Send Message
                    </button>
                </form>

                <div>
                    <div className={"mt-8 text-center text-gray-600 font-bold text-sm"}>
                        Contact us at: <br/>
                        <FaEnvelope className={"inline-block mr-2"} size={20}/> info@YouNeedHelp.org <br/>
                        <FaPhone className={"inline-block mr-2"} size={20}/>(555) 555-5555 <br/>
                        <GiStopSign className={"inline-block mr-2"} size={40} color={"red"}/>Please! Do not contact us for any reason.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;