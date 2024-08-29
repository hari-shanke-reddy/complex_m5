import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  return (
    <div>
      <div className="h-[600px] w-full bg-customRed flex flex-col  mt-[500px]">
        <div className="flex mt-20  ">
          <div className="w-52 mt-14  h-28 flex justify-center items-center  rotate-90 bg-black text-white font-bold text-3xl">
            complexM5
          </div>
          <div className="text-2xl   mt-24 font-bold  h-[40px] w-[210px] rotate-90 ">
            +1(234)567-890
          </div>
          <div className="mr-96">
            <ul className="flex flex-col space-x-5 space-y-3 ">
              <li className="text-xl font-bold ">Quick Links</li>
              <li>HOME</li>
              <li>PAGES</li>
              <li>BLOG</li>
              <li>CONTACT</li>
              <li>PORTFOLIO</li>
            </ul>
          </div>
          <div className="pr-[200px]">
            <ul className="flex flex-col space-x-1 space-y-3 ">
              <li className="text-xl font-bold">Follow</li>
              <li>FACEBOOK</li>
              <li>TWITTER</li>
              <li>INSTAGRAM</li>
              <li>LINKEDIN</li>
            </ul>
          </div>
          <div className="flex flex-col w-[300px] space-y-10 mr-20">
            <div className="text-xl font-bold">Newsletter</div>
            <input
              type="email"
              placeholder="Email"
              className="bg-customRed w-72 h-10 mt-10  border-0 border-b-2 border-solid border-black "
            />
            <div>Privacy Policy and Terms of Service.</div>
          </div>
        </div>
        <div className="h-1 w-full bg-black mt-20"></div>
        <div className="flex justify-around text-lg font-bold">
          <div>© Copyright 2025 Mobirise - All Rights Reserved</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
