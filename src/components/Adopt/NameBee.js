import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NameBee = () => {
  const [save, setSave] = useState(false);
  console.log(save);

  return (
    <div>
      {!save && (
        <>
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

            <p className="text-black-txt mx-6 pb-2 py-3">
              Give your bee a name:
            </p>
            <div className="flex items-center relative border rounded h-8 mx-3">
              <input
                type="text"
                name="name"
                id="name"
                className="block text-center w-20 sm:text-sm border-placeholder-txt rounded outline-0 text-[583412] font-[Allura]"
                defaultValue="Rosie"
              />
            </div>

            <div className="flex justify-start" onClick={() => setSave(true)}>
              <button className="px-6 py-1 m-4 border border-transparent text-base font-medium rounded text-white bg-moon-yellow hover:bg-[#FDCA45] md:py-4 md:text-lg md:px-10">
                Save
              </button>
            </div>
          </div>
        </>
      )}

      {save && (
        <>
          <div className="flex flex-col mx-auto">
            <h1 className="font-medium text-black-txt">My Bees</h1>
            <div className="bg-white w-5/6 border-1 drop-shadow-md rounded mx-auto flex flex-col">
              <div className="flex mx-4 mt-2">
                <Image
                  src="/assets/images/my_bee.svg"
                  alt="Bee"
                  width={71}
                  height={73}
                />
                <div className="flex flex-col mx-2">
                  <p className="text-[583412] font-[Allura] text-xl">Rosie</p>
                  <div className="flex flex-col">
                    <p className="text-black-txt">
                      Pollen collected today: 130mg
                    </p>
                    <p className="text-black-txt">
                      Nectar collected today: 200mg
                    </p>
                    <p className="text-black-txt">Distance covered: 16km</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NameBee;
