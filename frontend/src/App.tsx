import "./App.css";
import { CompaniesBanner } from "./components/CompaniesBanner";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <CompaniesBanner />
    </>
  );
}

export default App;
