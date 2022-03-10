import withAuth from "../components/withAuth";

const TestProtected = () => {
  //   const a = UseAuth();
  return <main className="flex border-4 border-red-600">You are In!</main>;
};

export default withAuth(TestProtected);
