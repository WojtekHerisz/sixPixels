import Stepper from "../components/Stepper";
import withAuth from "../components/withAuth";

const TestProtected = () => {
  return (
    <main className="">
      <h1>Adopt a bee</h1>
      <Stepper />
    </main>
  );
};

export default withAuth(TestProtected);
