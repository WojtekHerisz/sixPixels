import { useState } from "react";
import Stepper from "../components/Stepper";
import withAuth from "../components/withAuth";
import Header from "../components/Header";
import First from "../components/Adopt/First";
import Second from "../components/Adopt/Second";
import Third from "../components/Adopt/Third";
import BottomMenu from "../components/BottomMenu";

const AdoptBee = () => {
  const [step, setStep] = useState(1);

  const getComponent = () => {
    switch (step) {
      case 1:
        return <First setStep={setStep} />;
      case 2:
        return <Second setStep={setStep} />;
      case 3:
        return <Third />;
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
      <BottomMenu />
    </main>
  );
};

// export default withAuth(AdoptBee);
export default AdoptBee;
