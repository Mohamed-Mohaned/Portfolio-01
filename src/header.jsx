import profilePicture from "./assets/imgs/profile-photo.png";

export default function Header() {
  return (
    <>
      <div className=" max-w-7xl mx-auto px-6 min-h-screen flex items-center justify-between">

        {/* Left */}
        <div className="w-1/2">
          <span className="uppercase tracking-[4px] text-orange-500 text-sm">
            AVAILABLE FOR WORK
          </span>

          <h1 className="text-7xl font-bold leading-tight whitespace-nowrap">
            Hi, I'm <span className="text-orange-500">Eliott</span>
          </h1>

          <p className="text-gray-400 text-xl leading-10 max-w-lg">
            Freelance UI/UX Designer & Frontend Developer. I design and build
            digital products that people love to use — fast, clean, and accessible.
          </p>

          <div className="flex gap-4 mt-8 ">
            <button className=" flex items-center gap-2 rounded-3xl hover:bg-orange-500  bg-white text-black px-8 py-4  cursor-pointer">
              View my work
            </button>

            <button className="border border-gray-600 px-8 py-4 rounded-3xl hover:bg-orange-500   text-white cursor-pointer">
              Get in touch
            </button>
          </div>

        </div>


        {/* Right */}
        <div className=" w-1/2 flex justify-end  w-full h-full relative">
          <img src={profilePicture} alt="Profile" className="w-64 h-64   object-cover" class="rounded-2xl" />
          <button className="absolute -bottom-2 right-50 px-5 py-2 flex justify-start bg-orange-500 hover:bg-orange-900  rounded-3xl  cursor-pointer">
             Open To Projects
          </button>
        </div>



      </div>



    </>
  );
}
