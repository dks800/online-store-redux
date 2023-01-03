import './App.css';
import Header from './containers/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './containers/ProductList'
import ProductDetails from './containers/ProductDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductList />}/>
          <Route path="/product/:productId" exact element={<ProductDetails />} />
          <Route>404 Not Found!!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
