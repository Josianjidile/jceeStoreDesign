import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";


const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);

 
  const images =[
    "https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=20",
    "https://images.unsplash.com/photo-1549570652-97324981a6fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0eWxpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  ];

  return (
    <div className="product">
          <div className="left">
            <div className="images">
              <img
                src={images[0]} alt="" onClick={(e) => setSelectedImg(0)}
              />
             <img
                src={images[1]} alt="" onClick={(e) => setSelectedImg(1)}
              />
            </div>
            <div className="mainImg">
              <img
                src={images[selectedImg]} alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>Title</h1>
            <span className="price">$233</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
              elit. Consequuntur corrupti quas nam excepturi enim 
              debitis aut quaerat voluptates nemo. Molestias
               reprehenderit et suscipit rem eius adipisci, 
               voluptates nisi sint sequi.</p>
            <div className="quantity">
              <button
                onClick={() =>setQuantity((prev)=>(prev === 1 ? 1 : prev - 1))}>-</button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add">
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
          </div>

  );
};

export default Product;
