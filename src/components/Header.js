import Image from "next/image";

const Header = () => {
  return (
    <div className="flex p-8 items-center">
      <div className="">
        <Image
          src="/assets/images/arrow.svg"
          alt="arrow"
          width={29}
          height={22}
        />
      </div>
      <div className="absolute right-0 pr-6">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={100}
          height={40}
        />
      </div>
    </div>
  );
};

export default Header;
