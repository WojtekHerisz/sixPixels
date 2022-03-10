import Image from "next/image";

const Third = () => {
  return (
    <div>
      <h1 className="text-black-txt">Choose your payment method</h1>
      <button className="bg-white w-5/6 border rounded drop-shadow-sm pt-2">
        <Image
          src="/assets/images/pay_pal.svg"
          alt="PayPal"
          width={80}
          height={22}
        />
      </button>
      <button className="bg-white w-5/6 border rounded drop-shadow-sm pt-2">
        <Image
          src="/assets/images/google_pay.svg"
          alt="Google Pay"
          width={80}
          height={24}
        />
      </button>
      <button className="bg-white w-5/6 border rounded drop-shadow-sm pt-2">
        <Image
          src="/assets/images/mastercard.svg"
          alt="mastercard"
          width={53}
          height={40}
        />
      </button>
      <button className="bg-white w-5/6 border rounded drop-shadow-sm pt-2">
        <Image
          src="/assets/images/visa.svg"
          alt="visa"
          width={80}
          height={24}
        />
      </button>
    </div>
  );
};

export default Third;
