interface FeaturedShoeProps {
  name: string;
  img: string;
}

export const FeaturedShoe = ({ name, img }: FeaturedShoeProps) => {
  return (
    <div className="featured-shoe flex flex-col items-center w-1/3 min-w-[300px]">
      <img className="w-4/5" src={img} alt={name} />
      <h1 className="text-xl font-playfair text-[#331800]">{name}</h1>
    </div>
  );
}
