import { GoArrowUpRight } from "react-icons/go";

function Comp2() {
  return (
    <div>
      <div className="bg-black w-full h-[500px] mt-20">
        <div className="pt-5">
          <hr class="h-[3px] my-14 mx-[65px] w-[1400px] bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <div className="flex  justify-around items-center mt-28">
          <div className="text-white text-8xl font-bold w-[430px]  ">
            OUR HISTORY
          </div>
          <div className="text-white text-3xl font-bold w-96 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            laoreet est nec molestie suscipit dolor nunc
          </div>
          <div className="flex">
            <div className="text-white  text-3xl font-bold mt-11">VIEW ALL</div>
            <GoArrowUpRight className=" text-8xl  ml-2  transition-transform duration-500 hover:rotate-0 text-white hover:scale-150 cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp2;
