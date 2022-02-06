import React from "react";
import {useEffect , useState} from 'react';

interface Country {
    flag :any;
    name : string;
    capital : string;
   }
   
   function Countrydetails () {
    
    const [details, setDetails]= useState <Country[]>([])
    useEffect(()=> {
        fetch(`https://restcountries.com/v2/name/${name}?fullText=true`)
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
              <div>
             
             
            <img src={dataDeatails.flag} className='imageClass'/>        
            name: <div className='nameClass'>  {dataDeatails.name}, </div> 
            {/* <div className='capitalClass'> capital: {dataDeatails.capital} ,</div>  
            <div className='reClass'> region: {dataDeatails.region} ,</div> 
            <div className='popuClass'>  population: {datadetails.population}</div>
            <div className='lanClass'> languege:{dataDeatails.nativeName} </div>
            <div className='codeClass'> code:{dataDeatails.alpha2Code} </div> 
            <div className='altCode'> alttrnative spellings:{dataDeatails.altSpellings} </div>   
            <div className='callClass'> calling code:{dataDeatails.callingCodes} </div>       */}
               </div>
                )
           }

       )

            }
        </React.Fragment>
         
        ) };

   export default Countrydetails;