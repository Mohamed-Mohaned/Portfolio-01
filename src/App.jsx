import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (

    <>
      {/* <div className=" min-h-screen bg-gray-900 text-white ">
        <Navbar />
        <Header />
        <Footer />
      </div> */}
      <div
        className={
          darkMode
            ? "bg-[#0f172a] text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Header darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>

    </>


  );
}
