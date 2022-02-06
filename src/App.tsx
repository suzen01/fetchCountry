import React from 'react';
import './App.scss';
import * as ReactDOM from "react-dom";
import {BrowserRouter , Routes ,Route, Link } from 'react-router-dom';
import Card from './card/Card';
import DarkMode from './DarkMode';
import Table from './table/Table';

function ToRoutering (){

   return (
    <React.Fragment>
      {
     
          <div className=''>
           
          <nav> 
            <ul>
               <li >
                <Link to="/Table">table view</Link>
                
              </li>
              <li >
                <Link to="/Card">Card view</Link>
                
              </li>
            </ul>
          </nav>
          <Routes>
          
            <Route path="/Table" element={<Table/>}/>
                      
            <Route path="/Card" element={<Card/>}/>
                                  
          </Routes>
        </div>
 }
  </React.Fragment>
          );
  };
  
export default ToRoutering;


