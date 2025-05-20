// import React from 'react'
import { Link } from 'react-router-dom';
import './Catalog.css';
import { useState, useEffect } from "react";

export const Catalog = () => {
    const [models, setModels] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/api/products")
        .then((res)=>res.json())
        .then((data)=> setModels(data.models))
        .catch((e)=>console.log(e));
    },[]);

  return (
    <div className='container-catalog'>
        <div className="left-navbar">barra de navegacion</div>
        {models ? (
        <div className="catalog-info">
            <div className="prod-dat">
                <div className="last-Product">ultimo producto</div>
                <div className="model-Select">modelo seleccionado</div>
            </div>
            <div className="models-content">
                {models.map(m =>(
                    <div key={m.id} className='model'>
                        <h4>{m.name}</h4>
                        <div className="image-model">
                            <Link to={`/product-detail/${m.id}`}>
                            <img src={m.imageUrl} alt="imagen del producto"/>
                            </Link>
                        </div>
                        <p>${m.price}</p>
                    </div>
                ))}
            </div>
        </div>
        ) : (
        <p>Cargando...</p>
        )}
    </div>
  )
}
