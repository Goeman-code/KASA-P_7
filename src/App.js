import './App.css';
import {Routes, Route} from "react-router-dom"
import Banner from "./components/banner";
import Footer from "./components/footer";
import Apropos from './pages/apropos';
import Error from './pages/error';
import Fichelogement from './pages/fichelogement';
import Home from './pages/home';

function App() {

  return (
    <div>
      <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/fichelogement/:id" element={<Fichelogement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
    </div>
  );

}

export default App;
