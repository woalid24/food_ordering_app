import Image from "next/image";
import React from "react";
import { CiCircleChevRight } from "react-icons/ci";

const Hero = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="py-12">
        <h1 className="text-4xl font-semibold leading-normal ">Eveerything <br/>is better <br/> with a&nbsp;
        <span className="text-primary">pizza</span>
         </h1>
        <p className="my-4 text-gray-500 text-sm">
          Pizza is the missing piece that makes every , day complete, a simple yet delicious joy in life{" "}
        </p>
        <div className="flex gap-4">
          <button className="bg-primary text-white px-4 rounded-full flex py-2 gap-2 ">
            Order now <CiCircleChevRight className="w-6 h-6 " />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">Learn more <CiCircleChevRight className="w-6 h-6 " /></button>
        </div>
      </div>
      <div className="pt-[34px] pl-[95px]">
        <Image src={"/pizza.png"} height={300} width={270} alt={"pizza"} />
      </div>
    </section>
  );
};

export default Hero;
