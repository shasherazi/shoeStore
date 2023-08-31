interface BestSellerShoeProps {
  name: string;
  img: string;
  price: number;
  discount?: number;
}

export const BestSellerShoe = ({
  name,
  img,
  price,
  discount = 0,
}: BestSellerShoeProps) => {
  return (
    <div className="best-seller flex flex-col p-2 items-center">
      <img src={img} alt={name} />
      <p className="shoe-name font-playfair mt-2 text-sm text-center text-[#331800]">
        {name}
      </p>
      <div className="price-and-discount flex justify-center items-center gap-2">
        <p
          className={`price font-playfair text-sm mt-2 text-[#331800] ${
            discount > 0 && "line-through"
          }`}
        >
          ${price}
        </p>
        {discount > 0 && (
          <p className="discount font-playfair text-sm mt-2 text-[#331800]">
            ${(((100 - discount) / 100) * price).toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};
