import { useState } from "react";
import Stepper from "../components/Stepper";
import withAuth from "../components/withAuth";
import Header from "../components/Header";
import First from "../components/Adopt/first";

const AdoptBee = () => {
  const [step, setStep] = useState(1);

  const getComponent = () => {
    switch (step) {
      case 1:
        return <First />;
      default:
        return <>Oops!</>;
    }
  };

  return (
    <main className="flex flex-col justify-center">
      <Header />
      <h1 className="m-auto my-4 text-4xl font-poppins">Adopt a bee</h1>

      <Stepper current={step} handleClick={setStep} />
      {getComponent()}
    </main>
  );
};

// export default withAuth(AdoptBee);
export default AdoptBee;
