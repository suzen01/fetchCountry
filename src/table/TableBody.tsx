import React , {useEffect, useState} from 'react';
import './tableStyle.scss';
import Component from "../component/Component";

interface Country {
    flag :any;
    name : string;
    capital : string;
    population: number;
    region: string;

   }
   
   function TableBody () {
    
    const [detail, setDetail]= useState <Country[]>([])
    useEffect(()=> {
        fetch('https://restcountries.com/v2/all')
        .then((response)=> response.json())
        .then((data)=>{
            setDetail(data)
        })
    },[]);

       return (
        
        <React.Fragment>
            {
       detail.map((dataDea) => {
               return(
            <div >
              <div>
                  <div>
                      <table className='tableStyle'>
                          <thead > </thead> 
                             
                          <tbody >
                                <tr >
                                <a href={`/Component/${(dataDea.name)}`}  >
                                <td > <img src={dataDea.flag}className='imageClassTable' /></td>
                                <td> <div className='centerClass'> {dataDea.name} </div> </td>
                                <td> <div className='centerClass'> {dataDea.capital}   </div></td> 
                                <td> <div className='centerClass'> {dataDea.region}    </div></td>
                                <td> <div className='centerClass'> {dataDea.population}   </div> </td>
                                </a>
                                <br/>
                                </tr> 
                          </tbody> 
                     </table> 
                 </div>
             </div>
            </div>
                )
           }

       )
        }
       </React.Fragment>
         
        ) };

 export default TableBody;