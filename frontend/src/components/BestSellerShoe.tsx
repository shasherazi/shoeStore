interface BestSellerShoeProps {
  name: string;
  img: string;
  price: number;
}

export const BestSellerShoe = ({ name, img, price }: BestSellerShoeProps) => {
  return (
    <div className="best-seller flex flex-col p-2 items-center">
      <img src={img} alt={name} />
      <p className="shoe-name font-playfair mt-2 text-sm text-center text-[#331800]">
        {name}
      </p>
      <p className="price font-playfair text-sm mt-2 text-[#331800]">
        ${price}
      </p>
    </div>
  );
};
