import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";


const Cart = () => {

    const data =[
        {
            id: 1,
            img:"https://images.unsplash.com/photo-1598628461950-268968751a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R5bGlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            img2:"https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0eWxpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            title:"coat",
            desc:"long sleeve graphic t-shirt",
            isNew:true,
            oldPrice: 33,
            price:30,
        },
        {
            id: 2,
            img:"https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0eWxpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            img2:"https://images.unsplash.com/photo-1557775926-43491e5ae405?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0eWxpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            title:"skin",
            desc:"long sleeve graphic skirt",
            isNew:true,
            oldPrice: 53,
            price:30,
        }
      ]

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price} </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$653</span>
      </div>
      <button className="button" >PROCEED TO CHECKOUT</button>
      <span className="reset">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
