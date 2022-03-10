import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex p-8 items-center">
      <Link href="/">
        <a>
          <div className="">
            <Image
              src="/assets/images/arrow.svg"
              alt="arrow"
              width={29}
              height={22}
            />
          </div>
        </a>
      </Link>

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
