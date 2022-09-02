import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import data from "./data";

export default function App() {
  /*  */
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App--css">
      <Navbar />
      <Hero />
      <section className="cards--list">{cards}</section>
    </div>
  );
}
