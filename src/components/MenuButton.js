import Link from "next/link";
import Image from "next/image";

const MenuButton = ({ icon, title, route, handleClick }) => {
  if (handleClick)
    return (
      <Link href={route}>
        <a onClick={handleClick}>
          <div className="flex flex-col">
            <Image src={icon} alt={title} width={28} height={28} />
            <p className="text-black-txt text-sm">{title}</p>
          </div>
        </a>
      </Link>
    );
  else
    return (
      <Link href={route}>
        <a>
          <div className="flex flex-col">
            <Image src={icon} alt={title} width={28} height={28} />
            <p className="text-black-txt text-sm">{title}</p>
          </div>
        </a>
      </Link>
    );
};

export default MenuButton;
