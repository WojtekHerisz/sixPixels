import ProfileHeader from "../components/ProfileHeader";
import Image from "next/image";
import Link from "next/link";

const AdoptedBee = () => {
  return (
    <div className="h-screen">
      <ProfileHeader />
      <div className="bg-white w-5/6 border-1 drop-shadow-md rounded mx-auto flex flex-col">
        <p className="text-black-txt font-bold text-2xl p-4">
          Hurray, you&apos;ve adopted a&nbsp;bee!
        </p>

        <Image
          src="/assets/images/adopted_bee.svg"
          alt="Bee"
          width={77}
          height={79}
        />

        <p className="text-black-txt mx-6 pb-2 py-3">Give your bee a name:</p>
        <div className="flex items-center relative border rounded h-8 mx-3">
          <input
            type="text"
            name="name"
            id="name"
            className="block text-center w-20 sm:text-sm border-placeholder-txt rounded outline-0 text-[583412] font-[Allura]"
            defaultValue="Rosie"
          />
        </div>

        <div className="flex justify-start">
          <Link href="/login">
            <a className="px-6 py-1 m-4 border border-transparent text-base font-medium rounded text-white bg-moon-yellow hover:bg-[#FDCA45] md:py-4 md:text-lg md:px-10">
              Save
            </a>
          </Link>
        </div>
      </div>

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
        <h2 className="font-poppins font-semibold mt-18 mb-4">
          My honey orders
        </h2>
        <div className="shadow-xl border border-1 border-gray-200 rounded text-gray-500 text-center p-4">
          27.02.22 | Acacia | 500ml | 80 PLN
        </div>
      </div>
    </div>
  );
};

export default AdoptedBee;
