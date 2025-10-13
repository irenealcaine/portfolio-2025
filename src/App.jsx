
import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/Home/Home';
import AboutPage from './Pages/About/About';
import PortfolioPage from './Pages/Portfolio/Portfolio';
import NotFoundPage from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="*" exact element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
