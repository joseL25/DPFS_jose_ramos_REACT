// import React from 'react'
import { useState, useEffect } from "react";
import {Product} from '../product/Product'
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [model, setModel] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/detail/${id}`)
      .then((res) => res.json())
      .then((data) => setModel(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <div>ProductDetail</div>
      {model ? (
        <Product model={model}/>
      ) : (
        <p>Cargando...</p>
      )
      }
    </div>
  )
}
