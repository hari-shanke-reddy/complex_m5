import { GoArrowRight } from "react-icons/go";

function Comp8() {
  return (
    <div>
      <div>
        <div className="text-5xl font-bold ml-20 pt-48">NEWS</div>
        <div className="flex min-h-screen items-center justify-center ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden ">
              <div className="h-[400px] w-[450px] relative">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/features1.jpg"
                  alt=""
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              <div className="absolute  inset-0 flex  flex-col translate-y-[70%]  items-center justify-end px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-xl  flex-row font-bold text-black items-center pt-5  bg-customRed h-[80px]">
                  Corporate Advisory
                </h1>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden ">
              <div className="h-[400px] w-[450px]">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/features2.jpg"
                  alt=""
                />
              </div>

              <div className="absolute  inset-0 flex  flex-col translate-y-[70%]  items-center justify-end px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-xl  flex-row font-bold text-black items-center pt-5  bg-customRed h-[80px]">
                  Consulting survices
                </h1>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden ">
              <div className="h-[400px] w-[450px]">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/features3.jpg"
                  alt=""
                />
              </div>

              <div className="absolute  inset-0 flex  flex-col translate-y-[70%]  items-center justify-end px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-xl  flex-row font-bold text-black items-center pt-5  bg-customRed h-[80px]">
                  Bussiness solutions
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp8;
