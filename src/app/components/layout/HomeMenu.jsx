"use client";

import React from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";

const HomeMenu = () => {
  return (
    <section>
      <div className="absolute left-0 right-0 w-full justify-start ">
        <div className="absolute  -top-20 text-left -z-10 ">
          <Image src={"/sallad1.png"} alt={"sallad"} width={109} height={189} />
        </div>
        <div className="absolute -top-36 right-0 -z-10 ">
          <Image src={"/sallad2.png"} alt={"sallad"} width={107} height={195} />
        </div>
      </div>
      <div className="text-center leading-4">
        <h3 className="uppercase text-gray-600 font-semibold">Check out</h3>
        <h2 className="text-primary font-bold italic text-4xl mb-4">Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
      </div>
    </section>
  );
};

export default HomeMenu;
