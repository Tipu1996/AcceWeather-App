import React from "react";
import Card from "../../components/Card";
import { useState } from "react";

import SearchBox from "../../components/SearchBox";
import SearchButton from "../../components/SearchButton";

const Home = ()=>{
    const [city,setCity] = useState("")
    const [showCard,setShowCard] = useState(false)
    const [cityData,setCityData]= useState({name:'',temp:'',forecast:''})
   

    return <div 

        style={{padding:'10rem'}}>
        <div style={{display:'flex'}}>
            <SearchBox city={city} setCity={setCity}/>
            <SearchButton setShowCard={setShowCard} setCityData={setCityData} city={city}/>
        </div>
        {
        showCard && <Card cityData={cityData}/>
    }
    </div>


}

export default Home