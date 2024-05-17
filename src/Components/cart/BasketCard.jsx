import React from "react";
import { FaTrash } from "react-icons/fa";


function BasketCard({ data, clickHandler }) {
  return (
    <div className="flex af:flex-col lg:flex-row justify-between border-dotted border-slate-200 shadow-sm border rounded-xl py-5 px-8 my-3">
      <div className="flex">
        <img src={data.image} alt={data.name} width="120" height="120" />
        <div className="flex flex-col justify-around">
          <h6 className="text-base font-bold">{data.name}</h6>
          <p>{data.final_price} تومان</p>
        </div>
      </div>
      <div className="flex af:flex-row-reverse af:items-center lg:flex-col justify-between lg:items-end af:my-4 lg:my-0">
        <FaTrash onClick={()=>clickHandler("DELETE",data)} className="cursor-pointer ml-2"/>
        <div>
          <button onClick={()=>clickHandler("INCREASE",data)} className="w-10 mx-3 text-lg font-bold shadow-md rounded-md">+</button>
          <span className="text-base font-bold">{data.numbers}</span>
          {data.numbers === 1 ? <button className="w-10 mx-3 text-lg text-slate-400 shadow-md rounded-md" disabled>-</button> : <button onClick={()=>clickHandler("DECREASE",data)} className="w-10 mx-3 text-lg font-bold shadow-md rounded-md">-</button>}
          
        </div>
      </div>
    </div>
  );
}

export default BasketCard;
