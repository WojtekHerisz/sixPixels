import Image from "next/image";
import Search from "../Search";
import Slider from "../Slider";
import Map from "../../../public/assets/images/map.png";
import MapSm from "../../../public/assets/images/mapSm.png";
import Marker from "../../../public/assets/images/marker.svg";
import Bee from "../../../public/assets/images/bee.svg";
import { useState } from "react";

const First = ({ setStep }) => {
  const [choosen, setChoosen] = useState();
  const [selected, setSelected] = useState(false);

  const handleClick = (e) => {
    setChoosen((prev) => (prev === e ? "" : e));
  };

  return (
    <div>
      <Search label="" />
      <Slider />
      {!selected && (
        <div className="relative flex items-center justify-center py-5">
          <Image src={Map} alt="map" />
          <div
            className="absolute top-1/3 left-1/3"
            onClick={() => handleClick(1)}
          >
            {choosen === 1 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col p-3 border border-1 w-48 border-bee-brown bg-white rounded z-10">
                <span className="text-bold">Słodka kraina Apiary</span>
                <span className="italic">Sells honey</span>
                <br />
                <span>No of bees: 21013</span>
                <span>No of bees to adopt: 4352</span>
                <button
                  type="button"
                  className="text-white rounded bg-bee"
                  onClick={() => setSelected(true)}
                >
                  Select
                </button>
              </div>
            )}
            <Image src={Marker} alt="Bee Garden" width={48} height={48} />
          </div>
          <div
            className="absolute bottom-1/3 left-1/3"
            onClick={() => handleClick(2)}
          >
            {choosen === 2 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col p-3 border border-1 w-48 border-bee-brown bg-white rounded z-10">
                <span className="text-bold">The best local honey</span>
                <span className="italic">Sells the best honey</span>
                <br />
                <span>No of bees: 100200</span>
                <span>No of bees to adopt: 53252</span>
                <button
                  type="button"
                  className="text-white rounded bg-bee"
                  onClick={() => setSelected(true)}
                >
                  Select
                </button>
              </div>
            )}
            <Image src={Marker} alt="Bee Garden" width={48} height={48} />
          </div>
          <div
            className="absolute top-1/2 right-1/4"
            onClick={() => handleClick(3)}
          >
            {choosen === 3 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col p-3 border border-1 w-48 border-bee-brown bg-white rounded z-10">
                <span className="text-bold">The best honey garden</span>
                <span className="italic">Sells honey</span>
                <br />
                <span>No of bees: 12</span>
                <span>No of bees to adopt: 0</span>
                <button
                  type="button"
                  className="text-white rounded bg-bee"
                  onClick={() => setSelected(true)}
                >
                  Select
                </button>
              </div>
            )}
            <Image src={Marker} alt="Bee Garden" width={48} height={48} />
          </div>
        </div>
      )}
      {selected && (
        <div className="grid grid-cols-2 p-4">
          <Image src={MapSm} alt="map" />
          <div className="flex flex-col p-3 ">
            <span className="font-bold">The best honey garden</span>
            <span>phone: +123456789</span>
            <span>https://somecoolwebsite.pl</span>
            <span>Pokoju 62, 42-700 Lubliniec</span>
          </div>
          <div className="flex flex-col p-3 ">
            <span>No of bees: 100200</span>
            <span>
              No of bees to adopt: <span className="font-bold">53252</span>
            </span>
            <span>Types of honey</span>
            <ul className="list-disc list-inside">
              <li>Acacia</li>
            </ul>
          </div>
          <div className="flex items-center justify-between">
            <Image src={Bee} alt="beeeeeee" />
            <Image src={Bee} alt="beeeeeee" />
          </div>
          <div className="col-span-2 flex flex-col">
            <button
              type="button"
              className="text-white rounded bg-bee font-lg"
              onClick={() => setStep(2)}
            >
              Adopt bee from this hive
            </button>
            <span className="font-sm">
              and get 5% discount on honey from this hive
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default First;
