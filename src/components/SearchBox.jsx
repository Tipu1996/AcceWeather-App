import React from "react";
import { useState } from "react";
import Card from "./Card";
import SearchButton from "./SearchButton";





const SearchBox = ({setCity, city})=>{


    const handleChange = (event)=>{
        setCity(event.target.value)

    }

   /* const [city,setCity] = useState("")
    const [showCard,setShowCard] = useState(false)
    const [cityData,setCityData]= useState({name:'',temp:'',forecast:''})
   */
    return <>
    <div style={{display:'flex',justifyContent:'space-between'}}>
    <input type="text" onChange={handleChange} value={city} style={{width:'900px'}} placeholder="Enter the name of the city"/>
    
    
    </div>

   
    
    </>
  
    


}

export default SearchBox