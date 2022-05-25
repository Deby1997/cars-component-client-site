
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Items/Extra/Blogs';
import MyPortfolio from './Items/Extra/MyPortfolio';
import Header from './Items/Home/Header';
import Home from './Items/Home/Home';
import NotFound from './Items/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="portfolio" element={<MyPortfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
