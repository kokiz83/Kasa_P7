import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Ficheproduct from './pages/FicheProduct';
import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Ficheproduct />} />
          {/*path="*" fonction si jamais l'url ne correspond à rien de déclaré au dessus */}
          <Route path="*" element={<Error />} />

        </Routes>
      </main>
      <Footer/>

    </div>

  );
};