import { useParams } from "react-router-dom";

const Product = () => {

    const { nome } = useParams();

    return (
        <>
            <h1>Product {nome}</h1>
        </>
      );
}
 
export default Product;