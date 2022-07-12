import axios from "axios";
import React, { useEffect ,useState} from "react";

const SearchButton = ({city,setShowCard,setCityData})=>{
const [searchClicked,setSearchClicked] = useState(false)
    
const handleSearch = ()=>{
    setShowCard(true)
    setSearchClicked(true)
 
}

useEffect(()=>{
fetchData()
setSearchClicked(false)
},[searchClicked])

const fetchData = async()=>{
  const key = "6NoMXa5MKwT5c37CsLLApCUSPbEGEOYG";
const baseUrl = "https://dataservice.accuweather.com/locations/v1/cities/search";
const query = `?apikey=${key}&q=${city}`;
//const baseUrlCity = "https://dataservice.accuweather.com/forecasts/v1/daily/1day/";
const keyData = await axios.get(baseUrl+query)
const finalUrl = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${keyData.data[0].Key}?apikey=${key}`
const finalData = await axios.get(finalUrl)
setCityData({forecast:finalData.data.DailyForecasts[0].Night.IconPhrase,
            temp:finalData.data.DailyForecasts[0].Temperature.Maximum.Value,
            name:keyData.data[0].EnglishName
})
console.log(finalData.data.DailyForecasts[0].Temperature.Maximum.Value)

  }
    return <button style={{padding:'0.5rem 4rem', backgroundColor:'#00ACEE'}} onClick={()=>handleSearch()}> Show Weather Info</button>

}

export default SearchButton