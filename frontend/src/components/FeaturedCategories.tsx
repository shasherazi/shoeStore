import { FeaturedShoe } from "./FeaturedShoe";

export const FeaturedCategories = () => {
  return (
    <div className="featured-categories mt-20 flex flex-col items-center">
      <h1 className="text-4xl font-playfair text-[#331800]">
        Featured Categories
      </h1>

      <div className="featured-shoes my-10 flex justify-between">
        <FeaturedShoe
          name="Oxford Shoe"
          img="https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_shoe/140853/side.png"
        />
        <FeaturedShoe
          name="Derby Shoe"
          img="https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_shoe/143693/side.png"
        />
        <FeaturedShoe
          name="Monk Shoe"
          img="https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_shoe/754470/side.png"
        />
      </div>
    </div>
  );
};
