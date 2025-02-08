import "./App.css";
import Hero from "./components/Hero/Hero";
import Results from "./components/Results/Results";
import Grid from "./components/Grid/Grid";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Results />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
