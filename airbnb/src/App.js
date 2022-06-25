import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpot={item.openSpots}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-container">{cards}</div>
    </div>
  );
}

export default App;
