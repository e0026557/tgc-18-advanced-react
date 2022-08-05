import { useState } from "react";
import ProductContext from "./ProductContext";

// IMPORTANT: Make sure the ProductProvider has props
// -> just a component
export default function ProductProvider(props) {
  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: 'brown rice cookie',
      cost: 9.99
    },
    {
      id: 2,
      product_name: 'brown rice drink',
      cost: 9.99
    },
    {
      id: 3,
      product_name: 'brown rice cake',
      cost: 9.99
    }
  ]);

  const context = {
    // function to get all the products (make sure it is an arrow function)
    getProducts: () => {
      // use axios to get all products

      return products; // products from the state variable
    },
    addProduct: (newProduct) => {
      setProducts([
        ...products,
        newProduct
      ]);
    },
    getProductById: (productId) => {
      return products.find( product => product.id === productId );
    }
  };

  // use ProductProvider as a higher order component
  // -> it has other components nested inside it
  return <ProductContext.Provider value={context}>
    {/* To access the child components nested inside ProductProvider */}
    {props.children}
  </ProductContext.Provider>

}