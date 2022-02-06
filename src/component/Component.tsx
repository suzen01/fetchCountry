import React , {useEffect, useState} from 'react';
import './component.scss';
import "../card/cardStyle.scss"

interface Country {
    flag :any;
    name : string;
    capital : string;
    population: number;
    region: string;
   }
   
   function Component () {
    
    const [details, setDetails]= useState <Country[]>([])
    useEffect(()=> {
        fetch('https://restcountries.com/v2/all')
        .then((response)=> response.json())
        .then((data)=>{
            setDetails(data)
        })
    },[]);

       return (
        <React.Fragment>
            {

       details.map((dataDeatails) => {
               return(
              <div className='cardCountener'>
              
             
            <img src={dataDeatails.flag} className='imageClass'/>        
            <div className='nameClass'> name: {dataDeatails.name}, </div> 
            <div className='capitalClass'> capital: {dataDeatails.capital} ,</div>  
            <div className='reClass'> region: {dataDeatails.region} ,</div> 
            <div className='popuClass'>  population: {dataDeatails.population}</div>
         
               </div>
                )
           }

       )

            }
        </React.Fragment>
         
        ) };

   export default Component;