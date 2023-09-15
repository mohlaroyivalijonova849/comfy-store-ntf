import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center py-20">
      <div className="ml-24 mt-14">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl text-[#394e6a] w-[496px]">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-[#394e6a]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className="mt-10">
          <Link className="btn btn-primary" to="/products">
            Our Products
          </Link>
        </div>
      </div>

      <div className="hidden h-[28rem] w-[496px] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                alt=""
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="pl-16 mt-28 text-[#394e6a]">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          featured products
        </h2>
        <hr className=" mt-5" />
      </div>
    </div>
  );
}

export default Hero;
