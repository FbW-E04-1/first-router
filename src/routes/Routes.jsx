import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Products from '../components/pages/Products';
import ProductDetail from '../components/pages/ProductDetail';
import NotFound404 from '../components/pages/NotFound404';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact='true' path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product-detail/:id' element={<ProductDetail />} />
      <Route element={<NotFound404 />} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
