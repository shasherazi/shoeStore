export const Hero = () => {
  return (
    <div className="hero flex gap-5 items-center h-[calc(100vh-69px)]">
      <div className="img flex-1 bg-[#33180010] h-full flex items-center">
        <img
          src="https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_shoe/810870/side.png"
          className="min-w-0"
        />
      </div>

      <div className="text flex-1  text-[#331800]">
        <h1 className="text-[6.5vw] leading-none font-playfair">
          Indulge <br /> in the lasting <br />{" "}
          <span className="italic">Look Of Luxury</span>
        </h1>

        <button className="font-inter text-[1.25vw] bg-[#331800] hover:bg-[#4d2400] text-white px-8 py-4 mt-8">
          See Product
        </button>
      </div>
    </div>
  );
};
