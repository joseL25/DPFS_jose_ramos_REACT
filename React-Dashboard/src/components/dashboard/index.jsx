// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Catalog } from '../catalog/Catalog'
import { Counter } from '../counter/Counter'
import { LastProduct } from '../lastProduct/LastProduct'
import {ProductDetail} from '../productDetail/ProductDetail'

export const Dashboard = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={
        <>
          <Counter/>
          <Catalog/>
        </>
      } />
      <Route path='/catalog' element={
        <>
          <Catalog/>
        </>
      } />
      <Route path='/last-product' element={
        <>
          <LastProduct/>
        </>
      } />
      <Route path='/counter' element={
        <>
          <Counter/>
        </>
      } />
      <Route path='/product-detail/:id' element={
        <>
          <ProductDetail/>
        </>
      } />
    </Routes>
    
    </>
  )
}