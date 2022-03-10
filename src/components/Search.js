import Image from "next/image";

const Search = () => {
  return (
    <div className="flex flex-col p-4">
      <label className="block text-base font-small text-black-txt pl-4">
        Search for an apiary in your area
      </label>

      <div className="flex items-center mt-2 relative border rounded bg-white h-12">
        <input
          type="text"
          name="apiary"
          id="apiary"
          className="block w-full pl-4 sm:text-sm border-placeholder-txt rounded outline-0"
          placeholder="Type in your city or postal code"
        />
        <div className="pr-4 pt-1">
          <Image
            src="/assets/images/search_icon.svg"
            alt="logo"
            width={22}
            height={22}
          />
        </div>
      </div>

      <div className="flex items-center pl-4 pt-2">
        <Image
          src="/assets/images/navigation_icon.svg"
          alt="logo"
          width={24}
          height={24}
        />
        <p className="text-green-envy pl-1 text-base font-small">
          Use my current location
        </p>
      </div>
    </div>
  );
};

export default Search;
