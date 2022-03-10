import { useState } from "react";
import Stepper from "../components/Stepper";
import withAuth from "../components/withAuth";
import Header from "../components/Header";

const TestProtected = () => {
  const [step, setStep] = useState(1);
  return (
    <main className="flex flex-col justify-center">
      <Header />
      <h1 className="m-auto my-8 font-bold text-2xl">Adopt a bee</h1>
      <Stepper current={step} handleClick={setStep} />
    </main>
  );
};

export default TestProtected;
