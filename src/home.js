import DSA from "pages/dsa.jsx";
import Header from "./pages/header.jsx";
import Hero from "./pages/hero.jsx";
import Team from "pages/team.jsx";
import Footer from "pages/footer.jsx";
function Home() {
  return (
    <div classname="font-poppins">
      <Header />
      <Hero />
      <DSA />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
