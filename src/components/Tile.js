import Image from "next/image";
import Link from "next/link";

const Tile = ({ icon, title, route, handleClick }) => {
  if (handleClick)
    return (
      <div className="p-5">
        <Link href={route}>
          <a onClick={handleClick}>
            <div className="bg-white flex flex-col items-center justify-center rounded pt-3 pb-1 border drop-shadow-md">
              <Image src={icon} alt={title} width={131} height={131} />
              <p className="p-1 text-black-txt">{title}</p>
            </div>
          </a>
        </Link>
      </div>
    );
  else
    return (
      <div className="p-5">
        <Link href={route}>
          <a>
            <div className="bg-white flex flex-col items-center justify-center rounded pt-3 pb-1 border drop-shadow-md">
              <Image src={icon} alt={title} width={131} height={131} />
              <p className="p-1 text-black-txt">{title}</p>
            </div>
          </a>
        </Link>
      </div>
    );
};

export default Tile;
