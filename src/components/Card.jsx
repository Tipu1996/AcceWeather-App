import React from "react";

const Card = ({cityData})=>{

    return <div style={{padding:'2rem 2rem',marginLeft:'-0.2%', marginTop:'5%',width:'200px', height:'200px',backgroundColor:'white',borderRadius:'5px', border:'1px solid black'}}>
        <div >
        <h2>{cityData.name}</h2> 
        <h1>{cityData.temp}<sup>&#176;</sup>F</h1>
        <h3>{cityData.forecast}</h3>
        
        </div>

    </div>

}

export default Card