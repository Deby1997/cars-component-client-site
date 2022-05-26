
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Items/Extra/Blogs';
import MyPortfolio from './Items/Extra/MyPortfolio';
import Header from './Items/Home/Header';
import Home from './Items/Home/Home';
import LogIn from './Items/LogIn/LogIn';
import SignUp from './Items/LogIn/SignUp';
import Services from './Items/Home/Products/Services';
import NotFound from './Items/NotFound/NotFound';
import RequireAuth from './Items/LogIn/RequireAuth';
import MyDashboard from './Items/Dashboard/MyDashboard';
import ItemsDetail from './Items/Home/Products/ItemsDetail';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="portfolio" element={<MyPortfolio />} />
        <Route path='/items/:itemId' element={
          <RequireAuth>
            <ItemsDetail />
          </RequireAuth>
        } />
        <Route path="service" element={
          <RequireAuth>
            <Services />
          </RequireAuth>
        } />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={
          <RequireAuth>
            <MyDashboard />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
