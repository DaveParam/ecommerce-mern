import React from 'react'
import { Routes , Route} from "react-router-dom"
import About from './pages/About.js'
import Homepage from '../src/pages/HomePage.js'
import Contact from './pages/Contact.js'
import Policy from './pages/Policy.js'
import PagenotFound from '../src/pages/PagenotFound.js'
import Register from './pages/auth/Register.js'
import Login from './pages/auth/Login.js'
import AdminRoute from "./components/Routes/AdminRoute.js"
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/user/Dashboard.js'
import ForgotPasssword from '../src/pages/auth/ForgotPassword.js'
import AdminDahboard from './pages/admin/AdminDahboard.js'
import CreateCategory from './pages/admin/CreateCategory.js'
import CreateProduct from './pages/admin/CreateProduct.js'
import Users from './pages/admin/Users.js'
import Order from './pages/user/Orders.js'
import Profile from './pages/user/Profile.js'
import Products from './pages/admin/Products.js'
import UpdateProduct from './pages/admin/UpdateProduct.js'
import Search from './pages/Search.js'
import ProductDetails from "./pages/ProductDetails";
import CartPage from './pages/CartPage.js'
import Orders from "./pages/admin/AdminOrders.js"



function App() {
  return (
   <>
   

    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/policy' element={<Policy/>}/>
    <Route path='*' element={<PagenotFound/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/product/:slug' element={<ProductDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/dashboard/user/orders' element={<Order/>}/>
    <Route path='/dashboard/user/profile' element={<Profile/>}/>
    <Route path='/forgot-password' element={<ForgotPasssword/>}/>
    <Route path='/dashboard' element={<AdminRoute/>}>
       <Route path='admin' element={<AdminDahboard/>}/>
       <Route path='admin/create-category' element={<CreateCategory/>}/>
       <Route path='admin/create-product' element={<CreateProduct/>}/>
       <Route path='admin/product/:slug' element={<UpdateProduct/>}/>
       <Route path='admin/users' element={<Users/>}/>
       <Route path='admin/orders' element={<Orders/>}/>
       <Route path='admin/products' element={<Products/>}/>

    </Route>

    

    

    </Routes>
    
 
   
  
   </>
  )
}

export default App