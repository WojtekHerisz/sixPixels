import BeeTile from "./BeeTile";
import Link from "next/link";
import { useState } from "react";

const Second = ({ setStep }) => {
  const [bee, setBee] = useState("");
  console.log(bee);

  return (
    <div className="grid justify-items-center">
      <BeeTile
        icon="/assets/images/queen_bee.svg"
        title="Queen bee"
        route="#"
        onClick={() => setBee("Queen bee")}
        bee={bee}
      />
      <BeeTile
        icon="/assets/images/drone_bee.svg"
        title="Drone bee"
        route="#"
        onClick={() => setBee("Drone bee")}
        bee={bee}
      />
      <BeeTile
        icon="/assets/images/worker_bee.svg"
        title="Worker bee"
        route="#"
        onClick={() => setBee("Worker bee")}
        bee={bee}
      />

      <div className="flex justify-end" onClick={() => setStep(3)}>
        <Link href="#">
          <a className="px-6 py-1 m-3 border border-transparent text-base font-medium rounded text-white bg-moon-yellow hover:bg-[#FDCA45] md:py-4 md:text-lg md:px-10">
            Adopt this bee
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Second;
