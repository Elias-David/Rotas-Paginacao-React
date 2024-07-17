import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import PageLayout from '../layouts/PageLayout';
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';

const Paths = () => {
    return (
        <>
           <BrowserRouter>
               <Routes>
                    <Route path='/' element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path='/produtos' element={<Products />} />
                        <Route path='/produto/:id/:nome' element={<Product />} />
                    </Route>
                    <Route path="*" element={<NotFound />}/>
                </Routes> 
           </BrowserRouter>
        </>  
      );
};
 
export default Paths;