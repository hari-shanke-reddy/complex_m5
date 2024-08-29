"use client";
import { GoArrowRight } from "react-icons/go";

function Comp9() {
  return (
    <div>
      <div className="mt-40 mb-20">
        <div className="text-8xl font-bold w-[500px] m-[50px]">
          START A PROJECT?
        </div>
        <div className="flex justify-around ">
          <div className="bg-customRed w-[950px] h-[450px] pt-10">
            <form>
              <input
                type="text"
                placeholder="NAME"
                className="bg-customRed w-96 h-10 mt-10 ml-20 border-0 border-b-2 border-solid border-gray-400 "
              />

              <input
                type="email"
                placeholder="EMAIL"
                className="bg-customRed w-96 h-10 mt-10 ml-20 border-0 border-b-2 border-solid border-gray-400 "
              />
              <input
                type="text"
                placeholder="MESSAGE"
                className="bg-customRed w-[800px] h-40 mt-10 ml-20 border-0 border-b-2 border-solid border-gray-400 "
              />
              <button
                type="submit"
                value="Submit"
                className="w-44 text-teal-50 text-2xl  h-16 bg-black flex justify-center items-center ml-20 mt-10"
              >
                submite
                <GoArrowRight className="h-8 w-10" />
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/1.png"
              alt="xx"
              className="w-36 h-36"
            ></img>
            <img
              src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/3.png"
              alt="xx"
              className="w-36 h-36"
            ></img>
            <img
              src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/2.png"
              alt="xx"
              className="w-48 h-36"
            ></img>
          </div>
          <div>
            <img
              src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/2.png"
              alt="xx"
              className="w-48 h-36"
            ></img>
            <img
              src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/4.png"
              alt="xx"
              className="w-36 h-36"
            ></img>
            <img
              src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/1.png"
              alt="xx"
              className="w-36 h-36"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp9;
