import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/produtos')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedProduct(products.find(product => product._id === event.target.value));
  }

  return (
    <form>
      <label>
        Produto:
        <select onChange={handleChange}>
          {products.map(product => (
            <option key={product._id} value={product._id}>{product.name}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Nome:
        <input type="text" value={selectedProduct.name} disabled />
      </label>
      <br />
      <label>
        Preço:
        <input type="text" value={selectedProduct.price} disabled />
      </label>
      <br />
      <label>
        Descrição:
        <textarea value={selectedProduct.description} disabled />
      </label>
    </form>
  );
};

export default ProductForm;
