import "./App.css";
import { BestSellerShoes } from "./components/BestSellerShoes";
import { CompaniesBanner } from "./components/CompaniesBanner";
import { FeaturedShoes } from "./components/FeaturedShoes";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <CompaniesBanner />
      <FeaturedShoes />
      <BestSellerShoes />
    </>
  );
}

export default App;
