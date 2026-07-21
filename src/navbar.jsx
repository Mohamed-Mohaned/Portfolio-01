import logo from "./assets/imgs/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

export default function Navbar({ darkMode, setDarkMode }) {
    return (

        <nav
            className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-300 
                ${darkMode
                    ? "bg-[#0f172a] text-white"
                    : "bg-white text-gray-900 border-b border-gray-200"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-12 h-12 rounded-full object-cover"
                        />

                        <h1
                            className={`text-2xl font-bold ${darkMode ? "text-white" : "text-amber-950"
                                }`}
                        >
                            eli
                            <span
                                className={`text-2xl font-bold ${darkMode ? "text-amber-400" : "text-amber-600"
                                    }`}
                            >
                                ott
                            </span>
                        </h1>
                    </div>

                    {/* Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {/* Services */}
                        <li className="relative group">

                            <button
                                className={`flex items-center gap-2 px-5 py-2 rounded-3xl transition-all duration-300 cursor-pointer ${darkMode
                                    ? "text-white hover:text-orange-500"
                                    : "text-gray-900 hover:text-orange-500"
                                    }`}
                            >
                                Services <IoChevronDown size={12} />
                            </button>

                            <div className={`absolute left-0 top-full opacity-0 invisible  -translate-y-3 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100
                              transition-all duration-300 ease-out w-56 rounded-2xl   shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl overflow-hidden z-50   
                                 ${darkMode
                                    ? "bg-slate-900/60"
                                    : "bg-white/60"
                                }`}
                            >

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Web Design
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    UI / UX Design
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Frontend Development
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Responsive Websites
                                </a>

                            </div>

                        </li>
                        {/* Work */}
                        <li className="relative group py-2">

                            <a
                                href="#"
                                className=" flex items-center gap-2 hover:text-orange-500 duration-300"
                            >
                                Work
                                <IoChevronDown size={12} />
                            </a>

                            <div className={`absolute left-0 top-full opacity-0 invisible -translate-y-3 scale-95 group-hover:opacity-100   group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out  w-56 rounded-2xl 
                                      shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl  overflow-hidden z-50
                                             ${darkMode
                                    ? "bg-slate-900/60"
                                    : "bg-white/60"
                                }`}
                            >

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Portfolio
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Case Studies
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Web Applications
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Mobile Design
                                </a>

                            </div>

                        </li>
                        {/* About */}
                        <li className="relative group py-2">

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 hover:text-orange-500 duration-300"
                            >
                                About
                                <IoChevronDown size={12} />
                            </a>

                            <div className={`absolute left-0 top-full  opacity-0 invisible   -translate-y-3 scale-95 group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 
                               group-hover:scale-100 transition-all duration-300 ease-out w-56 rounded-2xl  shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl overflow-hidden z-50
                                       ${darkMode
                                    ? "bg-slate-900/60"
                                    : "bg-white/60"
                                }`}
                            >

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    My Story
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Skills
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Experience
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Certifications
                                </a>

                            </div>

                        </li>
                        {/* Reviews */}
                        <li className="relative group py-2">

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 hover:text-orange-500 duration-300"
                            >
                                Reviews
                                <IoChevronDown size={12} />
                            </a>

                            <div className={`absolute left-0 top-full opacity-0 invisible   -translate-y-3 scale-95  group-hover:opacity-100 group-hover:visible  group-hover:translate-y-0
                                  group-hover:scale-100 transition-all duration-300 ease-out w-56 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl overflow-hidden z-50
                                    ${darkMode
                                    ? "bg-slate-900/60"
                                    : "bg-white/60"
                                }`}
                            >

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Client Reviews
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Testimonials
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Success Stories
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Ratings
                                </a>

                            </div>

                        </li>
                        {/* Blog */}
                        <li className="relative group py-2">

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 hover:text-orange-500 duration-300"
                            >
                                Blog
                                <IoChevronDown size={12} />
                            </a>

                            <div className={`absolute left-0 top-full opacity-0 invisible -translate-y-3 scale-95  group-hover:opacity-100  group-hover:visible group-hover:translate-y-0 group-hover:scale-100
                                transition-all duration-300 ease-out w-56 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]  backdrop-blur-xl overflow-hidden z-50
                                      ${darkMode
                                    ? "bg-slate-900/60"
                                    : "bg-white/60"
                                }`}
                            >

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Latest Articles
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    UI / UX Tips
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Web Development
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Career Advice
                                </a>

                            </div>

                        </li>
                        {/* Contact */}
                        <li className="relative group py-2">

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 hover:text-orange-500 duration-300"
                            >
                                Contact
                                <IoChevronDown size={12} />
                            </a>

                            <div className={`absolute left-0 top-full opacity-0 invisible -translate-y-3 scale-95 group-hover:opacity-100  group-hover:visible  group-hover:translate-y-0 
                              group-hover:scale-100  transition-all duration-300 ease-out w-56 rounded-2xl  shadow-[0_20px_60px_rgba(0,0,0,0.25)]  backdrop-blur-xl  overflow-hidden z-50
                                         ${darkMode
                                        ? "bg-slate-900/60"
                                        : "bg-white/60"
                                    }`}
                            >
                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Contact Me
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Book a Meeting
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    Email Support
                                </a>

                                <a
                                    href="#"
                                    className={`block px-4 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                                        }`}
                                >
                                    FAQ
                                </a>

                            </div>

                        </li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <button onClick={() => setDarkMode(!darkMode)}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 hover:bg-orange-500 transition-all duration-300 cursor-pointer"
                        >
                            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                        </button>

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