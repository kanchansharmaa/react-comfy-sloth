import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Navbar,Sidebar,Footer} from './components'
import { Home,SingleProduct,Cart,Checkout,Error,About,
  Products,PrivateRoute,AuthWrapper } from "./pages";


function App() {
return (
  <AuthWrapper>
    <BrowserRouter>
     <Navbar/>
     <Sidebar/>
     <Routes>
       <Route exact path='/' element={<Home />} />
       <Route exact path='/about' element={<About/>} />
       <Route exact path="/cart" element={<Cart />} />
       <Route exact path='/products' element={<Products />} />
       <Route exact path ='/products/:id' element={<SingleProduct />} />
       <Route exact path='/checkout' element={
        <PrivateRoute>
          <Checkout/>
        </PrivateRoute>
       }/>
       <Route path='*' element={<Error/>} />
     </Routes>
     <Footer/>
    </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;


