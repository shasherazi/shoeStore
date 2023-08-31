import { FeaturedShoe } from "./FeaturedShoe";

export const FeaturedShoes = () => {
  return (
    <div className="featured-categories mt-20 flex flex-col items-center">
      <h1 className="text-4xl font-playfair text-[#331800]">
        Featured Categories
      </h1>

      <div className="featured-shoes mt-10 flex flex-wrap justify-center">
        <FeaturedShoe
          name="Oxford Shoes"
          img="https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_shoe/140853/side.png"
        />
        <FeaturedShoe
          name="Derby Shoes"
          img="https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_shoe/143693/side.png"
        />
        <FeaturedShoe
          name="Monk Shoes"
          img="https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_shoe/754470/side.png"
        />
      </div>
    </div>
  );
};
