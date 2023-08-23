import React from 'react'
import { Sidebar } from './component/Sidebar/Sidebar'
import './App.css'
import { Maindash } from './component/MainDash/Maindash'
import RightSide from './component/RightSide/RightSide'

export default function App() {
  return (
    <div className= 'App'>
       <div className='AppGlass'>
          <Sidebar/>
          <Maindash/>
          <RightSide/>
       </div>
    </div>
  )
}
