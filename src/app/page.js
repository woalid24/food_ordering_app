import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeMenu />
      <div className="text-center leading-4 my-12">
        <h3 className="uppercase text-gray-600 font-semibold">Our story</h3>
        <h2 className="text-primary font-bold italic text-4xl mb-4">About us</h2>
        <div className="text-gray-500 max-w-2xl mt-4 mx-auto flex flex-col gap-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae illum esse quisquam, eos
            suscipit cupiditate
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae illum esse quisquam, eos
            suscipit cupiditate ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae illum esse
            quisquam, eos suscipit cupiditate
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae illum esse quisquam, eos
            suscipit cupiditate
          </p>
        </div>
      </div>
      <div className="text-center leading-4 my-12">
        <h3 className="uppercase text-gray-600 font-semibold">Don't hesitate</h3>
        <h2 className="text-primary font-bold italic text-4xl mb-4">Contact us</h2>
        <a className="text-4xl underline text-gray-500" href="+434 345 352 747">
          {" "}
          +434 345 352 747
        </a>
      </div>
    </div>
  );
}
