import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katie from "./assets/katie.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img={katie}
        rating={5.0}
        reviewCount={6}
        country="usa"
        title="Life Lessons with Katie Zafres"
        price={136}
      />
    </div>
  );
}

export default App;
