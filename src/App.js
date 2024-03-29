import {useState} from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayouts from './pages/SharedLayouts'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './pages/ProtectedRoute';
import SharedProductLayout from './pages/SharedProductLayout';




function App() {
  const [user , setUser] = useState(null);
  //restricy=t access to certain routes
  return <BrowserRouter>

    <Routes>
      
      <Route path="/" element={<SharedLayouts/>}>
      <Route index element ={<Home/>}/>
        <Route path="about" element ={<About/>}/>
        <Route path="products" element={SharedProductLayout}>
          <Route index element ={<Products/>}/>
        <Route path="productId" element ={<SingleProduct/>}/>
        </Route>
        
        <Route path="login" element ={<Login setUser={setUser}></Login>}/>
        
        <Route path="dashboard" element ={
        
        <ProtectedRoute user={user}>
        <Dashboard user={user}/></ProtectedRoute>}/>


        <Route path="*" element ={<Error/>}/>
      </Route>
    
      
    </Routes> 
    
  
  </BrowserRouter>
} 

export default App;
