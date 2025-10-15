import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/Home/Home';
import AboutPage from './Pages/About/About';
import PortfolioPage from './Pages/Portfolio/Portfolio';
import NotFoundPage from './Pages/NotFound/NotFound';
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="*" exact element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
