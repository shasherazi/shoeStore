import { useEffect, useState } from "react";
import { BestSellerShoe } from "./BestSellerShoe";

export const BestSellerShoes = () => {
  const [bestSellerShoes, setBestSellerShoes] = useState([]);

  const fetchBestSellerShoes = async () => {
    const res = await fetch("https://shoestore-backend-dtg2.onrender.com/shoes");
    const data = await res.json();
    const bestSellerShoes = data.map((shoe: any) => {
      return {
        name: shoe.name,
        img: shoe.image,
        price: shoe.price,
        discount: shoe.discount,
      };
    });
    setBestSellerShoes(bestSellerShoes);
  };

  useEffect(() => {
    fetchBestSellerShoes();
  }, []);

  return (
    <div className="best-seller-shoes flex flex-col items-center mt-24 mb-10">
      <h1 className="text-4xl font-playfair text-[#331800]">Best Sellers</h1>

      <div className="mt-10 grid w-full justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-10 gap-5">
        {bestSellerShoes.map((shoe: any, index: number) => {
          return (
            <BestSellerShoe
              name={shoe.name}
              img={shoe.img}
              price={shoe.price}
              discount={shoe.discount}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
