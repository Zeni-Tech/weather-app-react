import './App.css';
import { useState,useEffect } from 'react';
function App() {
   const [city,setCity]=useState(null)
  const [search,setSearch]=useState("")


  useEffect(()=>{
    const fetchApi = async()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=37e858954eecab0bb7a7b375a28dcc1a`
      const response = await fetch(url)
      const resJson = await response.json()
      console.log(resJson)
      setCity(resJson.main)
    }
    fetchApi()
  },[search]) 
  return (
    <center>
    <div className='container'>
       <div className='Main'>
            <div className='input'>
             <input type="search" placeholder='Enter City Name' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
             </div>
    {
      !city?(
        <p className='NDF'>No Data Found</p>
      )
      :
      (
        <div className='Data'>
            <div className='cityName'>
        <h1><i className="fa-solid fa-temperature-half"></i> {search}</h1>
            </div>
            <div className='Cel'>
        <h2>{city.temp}°<i className="fa-solid fa-c"></i></h2>
            </div>
            <div className='Humi'>
            <h3>Humidity : {city.humidity} <i className="fa-solid fa-percent"></i></h3>
            </div>
            <div className='minmax'>
        <h3>Min: {city.temp_min}°Celsius | Max: {city.temp_max}°Celsius</h3> 
            </div>
        </div>
      )
    }
     
    </div>
    </div>
    </center> 
  );
}

export default App;
