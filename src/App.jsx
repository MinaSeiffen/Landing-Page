import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Components/Home';

const App = () => {
  return (
    <>
        <div>
          <Navbar />
        </div>
        <Home />
        <div>
          <Footer />
        </div>
    </>
  );
};

export default App;
