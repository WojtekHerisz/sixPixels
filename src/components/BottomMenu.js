import Image from "next/image";
import MenuButton from "./MenuButton";

const BottomMenu = ({ handleClick }) => {
  return (
    <div className="w-full sticky bottom-0 bg-white flex items-center justify-evenly pt-3 pb-3 rounded-t drop-shadow-2xl">
      <MenuButton icon="/assets/images/home.svg" title="Home" route="/" />
      <MenuButton
        icon="/assets/images/shop.svg"
        title="Shop"
        route="#"
        handleClick={handleClick}
      />
      <MenuButton
        icon="/assets/images/adopt.svg"
        title="Adopt"
        route="/adoptBee"
      />
      <MenuButton
        icon="/assets/images/profile.svg"
        title="Profile"
        route="#"
        handleClick={handleClick}
      />
    </div>
  );
};

export default BottomMenu;
