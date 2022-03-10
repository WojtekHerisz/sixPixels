import Image from "next/image";

const Third = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="grid grid-rows-3 justify-items-center">
        <h1 className="text-black-txt">Choose your payment method</h1>
        <div className="w-full">
          <button className="bg-white w-full border rounded drop-shadow-sm pt-2 h-12">
            <Image
              src="/assets/images/pay_pal.svg"
              alt="PayPal"
              width={80}
              height={22}
            />
          </button>
        </div>

        <div className="w-full pt-5">
          <button className="bg-white w-full border rounded drop-shadow-sm pt-2 h-12">
            <Image
              src="/assets/images/google_pay.svg"
              alt="Google Pay"
              width={80}
              height={24}
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-items-center h-16 pt-8 gap-5">
        <div className="w-full h-14">
          <button className="bg-white w-full border rounded drop-shadow-sm pt-2">
            <Image
              src="/assets/images/mastercard.svg"
              alt="mastercard"
              width={53}
              height={40}
            />
          </button>
        </div>

        <div className="w-full">
          <button className="bg-white w-full border rounded drop-shadow-sm pt-2 h-14">
            <Image
              src="/assets/images/visa.svg"
              alt="visa"
              width={85}
              height={27}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Third;
