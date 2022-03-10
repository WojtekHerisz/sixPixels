import ProfileHeader from "../components/ProfileHeader";
import Image from "next/image";

const AdoptedBee = () => {
  return (
    <div>
      <ProfileHeader />
      <div className="bg-white w-5/6 border-1 drop-shadow-md rounded mx-auto flex flex-col items-center">
        <p className="text-black-txt font-bold text-2xl p-4">
          Hurray, you've adopted a&nbsp;bee!
        </p>

        <Image
          src="/assets/images/adopted_bee.svg"
          alt="Bee"
          width={77}
          height={79}
        />

        <p className="text-black-txt">Radius</p>
        <div className="flex items-center relative border rounded bg-white h-6">
          <input
            type="number"
            name="radius"
            id="number"
            className="block text-center w-10 sm:text-sm border-placeholder-txt rounded outline-0 text-black-txt"
            value="5"
          />
        </div>
      </div>
    </div>
  );
};

export default AdoptedBee;
