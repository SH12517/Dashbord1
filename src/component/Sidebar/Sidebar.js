import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../../images/logo.jpg'
import {UilEstate} from '@iconscout/react-unicons'
import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt, UilBars} from '@iconscout/react-unicons'
import { motion } from 'framer-motion'

export const Sidebar = () => {
    const [selected,setSelected]=useState(0)
    const [expanded, setExpanded]=useState('')
    const sidebarVariants ={
      true:{
        left:'0'
      },
      false:{
        left: '-65%'
      }
    }
 
    return (
      <>
       <div className='bars' style={expanded ? {left:"60%"}:{left:'5%'}}
        onClick={()=>setExpanded(!expanded)}>
          <UilBars/>
        </div>
    <motion.div className='sidebar'
      variants={sidebarVariants}
       animate={window.innerWidth<=768?`${expanded}`:''}
    
     >
      <div className='logo'>
         <img src={logo}/>  
            <span>Sh</span><span className='o'>o</span><span>ps</span>
        </div>
        <div className='menu'>
          {SidebarData.map((item, index) =>{
            return(
                 <div className= {selected===index?'menu-item  active':'menu-item'} 
                   key={index}
                  onClick={()=> setSelected(index)}>
                    <item.icon/>
                    <span>{item.heading}</span>
                 </div>
            )
          })}
          <div className='menu-item'>
            <UilSignOutAlt/>
          </div>
       
    </div>
    </motion.div>
    </>
  )
}
