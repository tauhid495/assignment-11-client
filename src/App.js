
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageNotFound from './Components/404/PageNotFound';
import UnderConstruction from './Components/404/UnderConstruction';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import NavBar from './Components/CommonRouts/NavBar';
import Home from './Components/home/Home';
import ItemDetail from './Components/ItemSection/ItemDetail';
import AddProduct from './Components/ProductManagement/AddProduct';
import ManageInventories from './Components/ProductManagement/ManageInventories';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './Components/CommonRouts/Footer';
import RequireAuth from './Components/Authentication/RequireAuth';
import MyItems from './Components/ProductManagement/MyItems';
import Blog from './Components/Blog/Blog';
import AboutUs from './Components/aboutUs/AboutUs';


function App() {
  return (

    <div className="text-base-black bg-gray-100">

      <ToastContainer />

      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/item/:itemId' element={
          <RequireAuth>
            <ItemDetail />
          </RequireAuth>
        } />
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>
        } />
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/underconstruction' element={<UnderConstruction />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
