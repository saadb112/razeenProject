import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Service from './components/Service';
import Slider from './components/Slider';
function App() {
  return (
    <div className="App">
      <Header />
      {/* Products Section */}
      <Products />
      {/* Service Section */}
      <Service />
      {/* Slider */}

      <Slider />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
