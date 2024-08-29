import { GoCheck } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

function Comp6() {
  return (
    <div>
      <div className="text-6xl font-bold text-center mt-40 mb-20">
        PRICING PLAN
      </div>
      <div className="flex justify-around">
        <div className="h-[650px] w-[400px] flex flex-col items-center space-y-16 border border-slate-950 pt-10">
          <div className="text-2xl font-bold text-gray-950">Basic</div>
          <div className="text-7xl font-bold">
            <h6 className="text-xl">$</h6>
            29 <h6 className="text-2xl">/mo</h6>
          </div>
          <div>
            <ul className="flex flex-col space-y-2 text-xl">
              <li className="flex  ">
                <GoCheck className=" mr-4 rounded-full w-7 h-7 bg-customRed" />
                Consulting
              </li>
              <li className="flex ">
                <GoCheck className=" mr-4 rounded-full w-7 h-7 bg-customRed" />
                Advisory
              </li>
              <li className="flex ">
                <GoCheck className=" mr-4 rounded-full w-7 h-7 bg-customRed" />
                Analysis
              </li>
              <li className="flex ">
                <GoCheck className=" mr-4 rounded-full w-7 h-7 bg-customRed" />
                Services
              </li>
            </ul>
          </div>
          <div className="w-[150px]  flex justify-center items-center text-lg  font-bold h-[50px] bg-customRed hover:bg-black hover:text-white text-black">
            get started
            <GoChevronRight />
          </div>
        </div>
        <div className="h-[650px] w-[400px] flex flex-col items-center space-y-16 bg-customRed border border-slate-950 pt-10">
          <div className="text-2xl font-bold text-gray-950">Standard</div>
          <div className="text-7xl font-bold">
            {" "}
            <h6 className="text-xl">$</h6>
            39 <h6 className="text-2xl">/mo</h6>
          </div>
          <div>
            <ul className="flex flex-col space-y-2 text-xl">
              <li className="flex  ">
                <GoCheck className=" mr-4 rounded-full w-7 h-7 bg-customRed" />
                Consulting
              </li>
              <li className="flex ">
                <GoCheck className=" mr-4 rounded-full w-7 h-7 bg-customRed" />
                Advisory
              </li>
              <li className="flex ">
                <GoCheck className=" mr-4 rounded-full w-7 h-7 bg-customRed" />
                Analysis
              </li>
              <li className="flex ">
                <GoCheck className=" mr-4 rounded-full w-7 h-7 bg-customRed" />
                Services
              </li>
            </ul>
          </div>
          <div className="w-[150px] border border-zinc-950 flex justify-center items-center text-lg  font-bold h-[50px] bg-customRed hover:bg-black hover:text-white text-black">
            get started
            <GoChevronRight />
          </div>
        </div>
        <div className="h-[650px] w-[400px] flex flex-col items-center space-y-16 border  border-slate-950 pt-10">
          <div className="text-2xl font-bold text-gray-950">Advanced</div>
          <div className="text-7xl font-bold">
            {" "}
            <h6 className="text-xl">$</h6>
            49 <h6 className="text-2xl">/mo</h6>
          </div>
          <div>
            <ul className="flex flex-col space-y-2 text-xl">
              <li className="flex  ">
                <GoCheck className=" mr-4 rounded-full w-7 h-7 bg-customRed" />
                Consulting
              </li>
              <li className="flex ">
                <GoCheck className=" mr-4 rounded-full w-7 h-7 bg-customRed" />
                Advisory
              </li>
              <li className="flex ">
                <GoCheck className=" mr-4 rounded-full w-7 h-7 bg-customRed" />
                Analysis
              </li>
              <li className="flex ">
                <GoCheck className=" mr-4 rounded-full w-7 h-7 bg-customRed" />
                Services
              </li>
            </ul>
          </div>
          <div className="w-[150px]  flex justify-center items-center text-lg  font-bold h-[50px] bg-customRed hover:bg-black hover:text-white text-black">
            get started
            <GoChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp6;
