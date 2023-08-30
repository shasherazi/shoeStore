import "./App.css";
import { CompaniesBanner } from "./components/CompaniesBanner";
import { FeaturedCategories } from "./components/FeaturedCategories";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <CompaniesBanner />
      <FeaturedCategories />
    </>
  );
}

export default App;
