import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                <li><Link to={"/produto/1/abacate"}>Abacate</Link></li>
                <li><Link to={"/produto/2/banana"}>Banana</Link></li>
                <li><Link to={"/produto/3/cenoura"}>Cenoura</Link></li>
                <li><Link to={"/produto/4/espinafre"}>Espinafre</Link></li>
                <li><Link to={"/produto/5/framboesa"}>Framboesa</Link></li>
            </ul>
        </div>
      );
};
 
export default Products;