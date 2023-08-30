export const Hero = () => {
  return (
    <div className="hero flex gap-5 items-center h-[calc(100vh-69px)]">
      <div className="img flex-1 bg-[#33180010] self-stretch">
        <img src="https://www.church-footwear.com/content/dam/churchs_products/E/EEC/EEC329/9AF0F0AXO/EEC329_9AF0_F0AXO_F_000000_SLS.png" className="min-w-0" />
      </div>
      <div className="text flex-1  text-[#331800]">
        <h1 className="text-[6.5vw] leading-none font-playfair">Indulge <br /> in the lasting <br /> <span className="italic">Look Of Luxury</span></h1>
        <button className="font-inter text-[1.25vw] bg-[#331800] hover:bg-[#4d2400] text-white px-8 py-4 mt-8">See Product</button>
      </div>
    </div>
  )
}
