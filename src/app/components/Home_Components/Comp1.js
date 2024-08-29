import "./style.css";
function Comp1() {
  return (
    <div>
      <div className="flex m-20">
        <div>
          <div className="font-bold text-8xl w-[100px]">Our services</div>
          <div className="w-[400px] font-semibold mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            dignissim convallis condimentum. Phasellus pretium risus a sapien
            facilisis, quis ornare odio fermentum. Mauris et faucibus arcu.
          </div>
          <div className="bg-black text-white h-16 w-40 pl-2 text-xl text-center pt-4  font-bold mt-10">
            Read More
          </div>
        </div>
        <div>
          <div className="mt-5 ml-60">
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden ">
              <div class="h-[400px] w-[500px] relative">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/features1.jpg"
                  alt=""
                />

                {/* <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent"></div> */}
              </div>

              <div class="absolute inset-0  items-center justify-center  text-white">
                <h1 class="text-3xl font-bold bg-black text-white   h-[130px] w-[250px] mt-[270px] pt-7 group-hover:bg-customRed group-hover:text-black">
                  COSULTING & ADVISORY
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex m-40">
        <div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden ">
            <img
              class="h-[450PX] w-[500px]   transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/features1.jpg"
              alt=""
            />
            <div class="absolute inset-0  items-center justify-center  text-white">
              <h1 class="text-3xl font-bold bg-black text-white   h-[150px] w-[260px] mt-[300px] pt-10 group-hover:bg-customRed group-hover:text-black">
                COSULTING SERVICES
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-40 ml-32">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden ">
            <img
              class="h-[650PX] w-[500px]   transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/features2.jpg"
              alt=""
            />
            <div class="absolute inset-0  items-center justify-center  text-white">
              <h1 class="text-3xl font-bold bg-black text-white   h-[150px] w-[260px] mt-[500px] pt-10  group-hover:bg-customRed group-hover:text-black">
                CORPORATE ADVISORY
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp1;
