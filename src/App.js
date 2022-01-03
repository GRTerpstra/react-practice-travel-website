import './App.scss';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import Services from './Components/Pages/Services';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
      <div className="App">
          <Router>
            <Navbar />
              <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/products' exact element={<Products />} />
                  <Route path='/services' exact element={<Services />} />
                  <Route path='/sign-up' exact element={<SignUp />} />
              </Routes>
          </Router>
    </div>
  );
}

export default App;
