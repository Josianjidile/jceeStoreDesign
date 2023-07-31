import React from "react";
import "./List.scss";
import Card from "../Card/Card";


const List = ({ subCats, maxPrice, sort, catId }) => {
    const data =[
        {
            id: 1,
            img:"https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R5bGlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            img2:"https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R5bGlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title:"Long sleeve graphic t-shirt",
            isNew:true,
            oldPrice: 56,
            price:45,
        },
        {
            id: 2,
            img:"https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R5bGlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            img2:"https://images.unsplash.com/photo-1549570652-97324981a6fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0eWxpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            title:"t-shirt",
            isNew:true,
            oldPrice: 43,
            price:36,
        },
        {
            id: 3,
            img:"https://images.unsplash.com/photo-1598628461950-268968751a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R5bGlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            img2:"https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0eWxpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            title:"coat",
            isNew:true,
            oldPrice: 33,
            price:30,
        },
        {
            id: 4,
            img:"https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0eWxpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            img2:"https://images.unsplash.com/photo-1557775926-43491e5ae405?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0eWxpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            title:"skin",
            isNew:true,
            oldPrice: 53,
            price:30,
        }
      ]

  return (
    <div className="list">{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}
     
    </div>
  );
};

export default List;