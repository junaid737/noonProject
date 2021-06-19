import Header from './layout/header'
import Product from './layout/home/product'
import Slideshow from './layout/home/slider'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Slideshow />
      <Product />
      <Footer />
    </div>
  );
}

export default App;