import Search from "../Search";
import Slider from "../Slider";
import Map from "../../../public/assets/images/map.png";
import Image from "next/image";

const First = () => {
  return (
    <div className="">
      <Search label="" />
      <Slider />
      <Image src={Map} alt="map" />
    </div>
  );
};

export default First;
