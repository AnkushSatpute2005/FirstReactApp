import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
function App() {
  return (
    <>
      <Navbar />
      <div className="card">
        <Cards title="card-1" description="description-1" />
        <Cards title="card-2" description="description-2" />
        <Cards title="card-3" description="description-3" />
        <Cards title="card-4" description="description-4" />
      </div>
      <Footer />
    </>
  );
}

export default App;
