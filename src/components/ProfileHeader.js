import Image from "next/image";

const ProfileHeader = () => {
  return (
    <div className="flex p-8 items-center">
      <h1 className="text-xl font-medium pr-2 text-black-txt">Hello, John!</h1>

      <Image
        src="/assets/images/adopt.svg"
        alt="Adopt"
        width={20}
        height={20}
      />

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

export default ProfileHeader;
