import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div class="small-container">
        <div class="row row-2">
          <h2>All Products</h2>
          <select>
            <option>Default Shorting</option>
            <option>Short by price</option>
            <option>Short by popularity</option>
            <option>Short by rating</option>
            <option>Short by sale</option>
          </select>
        </div>

        <div class="row">
          <div class="col-4">
            <a href="product-details.html">
              <img src="imgs/UZU.jpg" />
            </a>
            <h4>
              <a href="product-details.html">Uzumaki</a>
            </h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          {products.map((product) => (<div class="col-4">
            <img src={product.img} />
            <h4>{product.title}</h4>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
            <p>${product.price}</p>
          </div>
          ))}
          
          
      
        </div>

        <div class="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>
    </>
  );
};

export default Product;
