import React from "react";
import TableBody from "./TableBody";
import './tableStyle.scss';


export default function Table() {
  
    return(
        <div>
            <h1 className='navbar' >TABLE VIEW </h1>
        <div >
     
        <div > 
        <table >
         <thead className="tableHeaderStyle">
            <tr  >
            <th >  </th>
            <th className="">    name   </th> 
            <th className="">  capital  </th> 
            <th className="">  region   </th> 
            <th className=""> population</th> 
          </tr>
         </thead>
        <tbody className=''>
        <TableBody/>
        </tbody>
        </table>
           

        </div>
 </div>
 </div>
    )
};
