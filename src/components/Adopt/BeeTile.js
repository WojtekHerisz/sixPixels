import Image from "next/image";
import Link from "next/link";

const BeeTile = ({ icon, title, route, bee, onClick }) => {
  return (
    <button className="p-2 w-44 focus:ring-red" onClick={onClick}>
      <Link href={route}>
        <a>
          <div
            className={`bg-white flex flex-col items-center justify-center rounded pt-3 pb-1 border drop-shadow-md ${
              bee === title ? "ring-4 ring-moon-yellow" : ""
            }`}
          >
            <Image src={icon} alt={title} width={90} height={90} />
            <p className="p-1 text-black-txt">{title}</p>
          </div>
        </a>
      </Link>
    </button>
  );
};

export default BeeTile;
