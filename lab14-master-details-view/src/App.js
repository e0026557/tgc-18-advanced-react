import React from 'react';
import ProductListing from './ProductListing';
import ProductProvider from './ProductProvider';

function App() {
  return (
    <React.Fragment>
      <ProductProvider>
        {/* Anything nested between ProductProvider tags will be access under props.children inside ProductProvider */}
        <ProductListing />
      </ProductProvider>
    </React.Fragment>
  );
}

export default App;
