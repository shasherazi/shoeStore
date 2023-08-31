import { BestSellerShoe } from "./BestSellerShoe";

export const BestSellerShoes = () => {
  return (
    <div className="best-seller-shoes flex flex-col items-center mt-24 mb-10">
      <h1 className="text-4xl font-playfair text-[#331800]">Best Sellers</h1>

      <div className="mt-10 grid w-full justify-items-center grid-cols-3 grid-rows-2 px-10 gap-5">
        <BestSellerShoe
          name="Cole Haan Original Grand Wingtip Oxfords, Cognac"
          img="https://image.menswearhouse.com/is/image/TMW/MW40_40ZC_05_COLE_HAAN_COGNAC_IVORY_MAIN?$40GridDesktop$"
          price={69.99}
        />


        <BestSellerShoe
          name="Florsheim Capitol Plain Toe Canvas Oxfords, Gray"
          img="https://image.menswearhouse.com/is/image/TMW/MW40_424D_04_JOSEPH_ABBOUD_GRAY_MAIN?$40GridDesktop$"
          price={69.99}
        />


        <BestSellerShoe
          name="Stacy Adams Bayne Double Monk Strap Dress Shoes, Black"
          img="https://image.menswearhouse.com/is/image/TMW/MW40_41RH_02_STACY_ADAMS_BLACK_MAIN?$40GridDesktop$"
          price={69.99}
        />


        <BestSellerShoe
          name="Cole Haan Zerogrand Stitchlite Knit Wingtip Oxfords, Navy"
          img="https://image.menswearhouse.com/is/image/TMW/MW40_41CX_01_COLE_HAAN_NAVY_MAIN?$40GridDesktop$"
          price={69.99}
        />


        <BestSellerShoe
          name="Florsheim Kierland Moc Toe Venetian Loafers, Cognac"
          img="https://image.menswearhouse.com/is/image/TMW/MW40_41M1_05_FLORSHEIM_COGNAC_MAIN?$40GridDesktop$"
          price={69.99}
        />


        <BestSellerShoe
          name="Johnston & Murphy Everett Suede Loafers, Black"
          img="https://image.menswearhouse.com/is/image/TMW/MW40_41R5_02_J_MURPHY_BLACK_MAIN?$40GridDesktop$"
          price={69.99}
        />
      </div>
    </div>
  );
};

