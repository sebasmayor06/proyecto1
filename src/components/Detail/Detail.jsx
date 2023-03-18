import style from "./Detail.module.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



 const Detail = () =>{
   
   const {detailId} = useParams();
   const [personajes, setPersonajes] = useState({});
   useEffect (()=>{
      const URL_BASE = "https://be-a-rym.up.railway.app/api";
      const Key = "0566f4c9fc9c.87c05fc0a438b7c78418";

   axios(`${URL_BASE}/character/${detailId}?key=${Key}`)
   .then ((response)=>setPersonajes(response.data))
   },[]);
   
   return (<div className={style.padre}>
      <div className={style.otra}>

      {personajes.name ? (
         <>
         <h2>Name: {personajes.name}</h2>
         <p>Status: {personajes.status}</p>
         <p>Species: {personajes.species}</p>
         <p>Gender: {personajes.gender}</p>
         <p>Origin: {personajes.origin?.name}</p>
         <img className= {style.imagen} src={personajes.image} alt="img" />
         </>
         ): (
            <h3>Loading...</h3>
         )
      
         
      }

      
     </div>
     </div>
   )
}

export default Detail;