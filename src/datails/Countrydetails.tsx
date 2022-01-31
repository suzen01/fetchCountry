import react , {useEffect, useState} from 'react';

interface Country {
    flag :any;
    name : string;
    capital : string;
   }
   
   function Countrydetails () {
    
    const [details, setDetails]= useState <Country[]>([])
    useEffect(()=> {
        fetch('https://restcountries.com/v2/all')
        .then((response)=> response.json())
        .then((data)=>{
            setDetails(data)
        })
    },[]);

       return (
           details.map((dataDeatails) => {
               return(
              <div>
             
             <h1 className='title'>  country details </h1>
            <img src={dataDeatails.flag} className='imageClass'/>        
            <div className='nameClass'> name: {dataDeatails.name}, </div> 
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
        ) };

   export default Countrydetails;