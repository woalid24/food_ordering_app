import React from "react";
import Image from "next/image";


const MenuItem = () => {
  return (
    <div>
      <div className="text-center bg-gray-200 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all hover:shadow-black/25 ">
        <div className="text-center flex justify-center ">
        <Image  src={"/pizza.png"} alt="pizza" height={125} width={200} />
        </div>
        
        <h4 className="font-semibold my-2">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae illum esse quisquam, eos
          suscipit cupiditate
        </p>
        <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">Add to cart 12$</button>
      </div>
    </div>
  );
};

export default MenuItem;
