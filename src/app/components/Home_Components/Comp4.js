import { ImFacebook } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";

function Comp4() {
  return (
    <div>
      <div className="flex m-20 ">
        <div>
          <div className="text-8xl font-bold w-5">Professional Team</div>
          <div className="text-xl font-serif w-[500px] mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            euismod egestas velit quis facilisis. Morbi fermentum purus odio,
            eget posuere diam luctus et. Nunc condimentum lobortis neque a
            convallis. Cras semper elit quis condimentum varius. Donec ornare
            eget nibh nec commodo. Duis efficitur ligula ante, quis vulputate
            lacus semper et. Fusce tempus condimentum nulla molestie faucibus.
          </div>
        </div>
        <div>
          <div className="joseph_container14  ml-80  ">
            <img
              src="https://mobirise.com/extensions/complexm5/advisory-firm/assets/images/team3.jpg"
              alt="kdk"
              className="image14 "
            ></img>
            <div className="overlay14 flex justify-around items-center">
              <div className="text-2xl font-bold text-center mt-4">
                David pacheco
              </div>
              <div className="text-xl mt-6 text-center ">director</div>
              <div className="flex space-x-3 text-center mt-7 ml-5 ">
                <ImFacebook className="w-8 h-6" />
                <GrInstagram className="w-8 h-6" />
                <FaTwitter className="w-8 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp4;
