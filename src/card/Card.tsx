  import React from 'react';
 import './cardStyle.scss'
 import Component from '../component/Component';
 import { useState } from 'react';



interface Search {
   name : string;
   val:any;
  
 }
export default function Card() {
  const[searchTerm, setSearchTerm]= useState <Search>()
   return (
         <div>
                      
           <h1>CARD VIEW </h1>
           <div className='container'>
             <Component/>
           </div>
         </div>
         
   )        
  }



