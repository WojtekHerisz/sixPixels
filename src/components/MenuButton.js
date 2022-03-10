import Link from "next/link";
import Image from "next/image";

const MenuButton = ({ icon, title, route }) => {
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
