import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-customRed p-4 w-full h-[850px]">
        <div className="flex   justify-around ">
          <div className="text-3xl font-bold">
            <Link href="#">ComplexM5</Link>
          </div>
          <ul className=" flex   justify-around space-x-16 mr-10 mt-1 text-base  font-semibold pl-[500px]">
            <li>
              <Link href="#">HOME</Link>
            </li>
            <li>
              <div className="relative group flex">
                <button className="  focus:outline-none ">
                  <Link href="#">FEATURES </Link>
                </button>
                <SlArrowDown className="ml-1 mt-1 " />

                <div className="absolute hidden group-hover:block right-0 mt-8 ml-36  w-56 bg-black rounded-md shadow-lg">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-white hover:text-customRed"
                  >
                    CONSULTING SERVICES
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-white hover:text-customRed"
                  >
                    CORPORATE ADVISORY
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link href="#">ABOUT</Link>
            </li>
            <li>
              <Link href="#">CONTACT</Link>
            </li>
          </ul>

          <div className="text-2xl font-bold">+1(234)567-890</div>
        </div>
        <div className="text-9xl font-bold  pt-52 pl-[695px] ">
          CORPORATE & ADVISORY _FIRM
        </div>
        <div className="text-3xl font-bold flex ml-10 ">
          <Link href="#" className="mt-10">
            ABOUT US{" "}
          </Link>
          <GoArrowUpRight className=" text-8xl  ml-2  transition-transform duration-500 hover:rotate-0  hover:scale-150 cursor-pointer " />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
