"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleFormSubmit = async(ev)=>{
    ev.preventDefault();
    try {
      const res = await fetch('/api/register', {
        method: "POST",
        headers: {
           "Content-Type": "application/json" 
          },
        body: JSON.stringify({ 
          email, password
         }),
      });
      if(res.ok){
        const form = ev.target;
        form.reset();
      }else{
        console.log("user res faild");
      }
    } catch (e) {
      console.log("Error during res :"+e);
    }
   
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary font-semibold  text-4xl ">Register</h1>
      <form className="block max-w-xl mx-auto py-10" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button
          className="border-0 bg-primary text-white block w-full rounded-xl px-6 py-2 font-semibold"
          type="submit"
        >
          Register
        </button>
        <div className="my-4 text-center text-gray-500">or login with provider</div>
        <button className="flex w-full rounded-xl justify-center gap-3 bg-slate-300 p-1">
          {" "}
          <FcGoogle className="h-8" />
          Login with google
        </button>
      </form>
    </section>
  );
};

export default page;
