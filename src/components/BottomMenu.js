import Image from "next/image";
import MenuButton from "./MenuButton";

const BottomMenu = () => {
  return (
    <div className="w-full absolute bottom-0 bg-white flex items-center justify-evenly pt-3 pb-3 rounded-t">
      <MenuButton icon="/assets/images/home.svg" title="Home" route="#" />
      <MenuButton icon="/assets/images/shop.svg" title="Shop" route="#" />
      <MenuButton
        icon="/assets/images/adopt.svg"
        title="Adopt"
        route="/adoptBee"
      />
      <MenuButton icon="/assets/images/profile.svg" title="Profile" route="#" />
    </div>
  );
};

export default BottomMenu;
