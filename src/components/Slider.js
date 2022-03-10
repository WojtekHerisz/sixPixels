const Slider = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <p className="text-black-txt">Radius</p>
      <div className="flex items-center relative border rounded bg-white h-6">
        <input
          type="number"
          name="radius"
          id="number"
          className="block text-center w-10 sm:text-sm border-placeholder-txt rounded outline-0 text-black-txt"
          value="5"
        />
      </div>
      <p className="text-black-txt">km</p>
      <div className="h-0.5 w-48 bg-bee-brown" />
    </div>
  );
};

export default Slider;
