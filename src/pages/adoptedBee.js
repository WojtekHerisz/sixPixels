import ProfileHeader from "../components/ProfileHeader";
import Image from "next/image";
import Link from "next/link";
import BottomMenu from "../components/BottomMenu";
import NameBee from "../components/Adopt/NameBee";

const AdoptedBee = () => {
  return (
    <div className="h-screen">
      <ProfileHeader />
      <NameBee />

      <div className="flex flex-col p-8">
        <h2 className="font-poppins font-semibold">My achievment</h2>
        <div className="flex items-center my-2">
          <Image
            src="/assets/images/award.png"
            alt="Bee"
            width={22}
            height={32}
          />
          <span className="mx-4">Adopting your first bee</span>
        </div>
        <div className="h-4 w-5/6 mx-auto mt-8 rounded border border-1 border-gray-400">
          <div className="h-4 w-1/5 rounded -translate-x-px -translate-y-px bg-bee ml-0 mr-auto" />
        </div>
        <span className="text-xs">
          Adopt more bees or make donations to unlock achievments!
        </span>
        <h2 className="font-poppins font-semibold mt-10 mb-4">
          My honey orders
        </h2>
        <div className="shadow-xl border border-1 border-gray-200 rounded text-gray-500 text-center p-4">
          27.02.22 | Acacia | 500ml | 80 PLN
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};

export default AdoptedBee;
