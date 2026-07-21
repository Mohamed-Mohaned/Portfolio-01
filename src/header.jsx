import profilePicture from "./assets/imgs/profile-photo.png";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";


export default function Header({ darkMode }) {
  return (
    <>
      <div className=" max-w-7xl mx-auto px-6 min-h-screen flex items-center justify-between">

        {/* Left */}
        <div className="w-1/2">
          <span className="uppercase tracking-[4px] text-orange-500 text-sm">
            AVAILABLE FOR WORK
          </span>

          <h1
            className={`text-7xl font-bold leading-tight whitespace-nowrap ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Hi, I'm <span className="text-orange-500">Eliott</span>
          </h1>

          <p
            className={`text-xl leading-10 max-w-lg ${darkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            Freelance UI/UX Designer & Frontend Developer. I design and build
            digital products that people love to use — fast, clean, and accessible.
          </p>

          <div className=" relative  flex gap-4 mt-8 ">
            <div className="relative group">

              <button
                className={`flex items-center gap-2 rounded-3xl px-8 py-4 transition-all duration-300 cursor-pointer ${darkMode
                  ? "bg-white text-black hover:bg-orange-500 hover:text-white"
                  : "bg-orange-500 text-white hover:bg-orange-600"
                  }`}
              >
                View my work <IoChevronDown size={16} />
              </button>

              <div
                className={`absolute left-0 top-full hidden group-hover:block w-48 rounded-xl shadow-xl border overflow-hidden z-50 ${darkMode
                  ? "bg-[#1f2937] border-gray-700"
                  : "bg-white border-gray-200"
                  }`}
              >

                <a
                  href="#"
                  className={`block px-4 py-2.5 text-[15px] font-medium transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                >
                  Portfolio
                </a>

                <a
                  href="#"
                  className={`block px-4 py-2.5 text-[15px] font-medium transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                >
                  Dashboard
                </a>



                <a
                  href="#"
                  className={`block px-4 py-2.5 text-[15px] font-medium transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                >
                  E-commerce
                </a>



                <a
                  href="#"
                  className={`block px-4 py-2.5 text-[15px] font-medium transition-all duration-300 hover:bg-orange-500 hover:text-white ${darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                >
                  Landing Page
                </a>

              </div>

            </div>


            <button
              className={`px-8 py-4 rounded-3xl border transition-all duration-300 cursor-pointer ${darkMode
                ? "border-gray-600 text-white hover:bg-orange-500 hover:border-orange-500"
                : "border-gray-400 text-gray-900 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                }`}
            >
              Get in touch
            </button>

          </div>

        </div>


        {/* Right */}
        <div className=" w-1/2 flex justify-end  w-full h-full relative">
          <img src={profilePicture} alt="Profile" className="w-64 h-64   object-cover" className="rounded-2xl" />
          <button
            className={`absolute -bottom-2 right-50 px-5 py-2 flex justify-start rounded-3xl transition-all duration-300 cursor-pointer ${darkMode
              ? "bg-orange-500 text-white hover:bg-orange-700"
              : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
          >
            Open To Projects
          </button>
        </div>

      </div >


      <div className="mt-2">

        {/* الخط */}
        <div className="w-200 border-t border-gray-700 h-px mb-8 mr-10 ml-15 "></div>

        {/* الإحصائيات */}
        <div
          className={`flex gap-8 mt-10 justify-start ml-14 pb-30 ${darkMode ? "text-white" : "text-gray-900"
            }`}
        >
          <div>
            <h2 className="text-5xl font-bold">
              34<span className="text-orange-500">+</span>
            </h2>

            <p className="mt-2 text-sm opacity-70">
              Projects done
            </p>
          </div>


          <div>
            <h2 className="text-5xl font-bold">
              21<span className="text-orange-500">+</span>
            </h2>

            <p className="mt-2 text-sm opacity-70">
              Happy clients
            </p>
          </div>


          <div>
            <h2 className="text-5xl font-bold">
              5<span className="text-orange-500">y</span>
            </h2>

            <p className="mt-2 text-sm opacity-70">
              Experience
            </p>
          </div>

        </div>
      </div>



    </>
  );
}
