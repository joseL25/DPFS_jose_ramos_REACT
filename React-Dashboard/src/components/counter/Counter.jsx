// import React from 'react'
// import './Catalog.css';
import { useState, useEffect } from "react";
import './counter.css'

export const Counter = () => {
  const [models, setModels] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setModels(data));

    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))

    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
  }, []);

  return (
    <div className='container-counter'>

      {models && categories ? (
        <>
          <div>
            <h4 className="list-title">items totales</h4>
            <ul className="list-count">
              <li>productos: {models.count}</li>
              <li>usuarios: {users.count}</li>
              <li>categorias: {categories.count}</li>
            </ul>
          </div>
          <div></div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  )
}
