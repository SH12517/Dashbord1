import React from 'react'
import './maindash.css'
import  {Cards}  from '../Cards/Cards'
import Table from '../../Table/Table'
export const Maindash = () => {
  return (
    <div className='Maindash'>
    <h1> Dashboard</h1>
      <Cards/>
      <Table/>
     </div>
  )
}
