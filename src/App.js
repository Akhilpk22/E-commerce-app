
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import WishLists from './pages/WishLists';
import Hader from './components/Hader';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Hader/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/Cart' element={<Cart/>}/>
          <Route path='/WishLists' element={<WishLists/>}/>
        </Routes>
        <Footer/>

        
    </div>
  );
}

export default App;
