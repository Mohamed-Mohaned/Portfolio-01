import logo from "./assets/imgs/logo.png";
import { FaSun } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Navbar() {
    return (

        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-12 h-12 rounded-full object-cover"
                        />

                        <h1 className="text-2xl font-bold text-amber-600 dark:text-white">
                            eli<span className="text-2xl font-bold text-amber-600 dark:text-amber-400">ott</span>
                        </h1>
                    </div>

                    {/* Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        <li>
                            <a href="#" className="hover:text-orange-500 duration-300">
                                Services
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-orange-500 duration-300">
                                Work
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-orange-500 duration-300">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-orange-500 duration-300">
                                Reviews
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-orange-500 duration-300">
                                Blog
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-orange-500 duration-300">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <FaSun className="text-2xl text-yellow-500" />

                        {/* Button */}
                        <button className=" flex items-center gap-2 bg-orange-500 hover:bg-orange-900 px-5 py-2 rounded-3xl duration-300 cursor-pointer">
                            Hire me  <FaArrowRightLong className="text-sm" />
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}