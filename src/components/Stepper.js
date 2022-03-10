const Stepper = ({ current, handleClick }) => (
  <div className="flex items-center justify-between relative w-2/3 h-20 m-auto">
    <div className="absolute top-50 h-1 w-full bg-bee" />
    <div
      onClick={() => handleClick(1)}
      className=" absolute top-50 left-0 h-10 w-10 bg-bee rounded"
    >
      <div
        className={`flex absolute rounded h-12 w-12 top-1/2 left-1/2 transition duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
          current === 1 && "border-2 border-bee-brown"
        }`}
      >
        <span className="m-auto">1</span>
      </div>
    </div>
    <div
      onClick={() => handleClick(2)}
      className="flex absolute p-2 top-1/2 left-1/2 transition transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-bee rounded"
    >
      <div
        className={`flex absolute rounded h-12 w-12 top-1/2 left-1/2 transition duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
          current === 2 && "border-2 border-bee-brown"
        }`}
      >
        <span className="m-auto">2</span>
      </div>
    </div>
    <div
      onClick={() => handleClick(3)}
      className="flex absolute top-50 right-0 h-10 w-10 bg-bee rounded"
    >
      <div
        className={`flex absolute rounded h-12 w-12 top-1/2 left-1/2 transform duration-300 -translate-x-1/2 -translate-y-1/2 ${
          current === 3 && "border-2 border-bee-brown"
        }`}
      >
        <span className="m-auto">3</span>
      </div>
    </div>
  </div>
);

export default Stepper;
