import style from "./Detail.module.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



 const Detail = () =>{
   
   const {detailId} = useParams();
   const [personajes, setPersonajes] = useState({});
   
   useEffect (()=>{
   
      const URL_BASE="http://localhost:3001";

   axios(`${URL_BASE}/detail/${detailId}`)
   .then ((response)=>setPersonajes(response.data))
   },[]);
   
   return (<div className={style.padre}>
      <div className={style.otra}>

      {personajes.name ? (
         <>
         <h2>Name: {personajes.name}</h2>
         <p>Origin: {personajes.origin.name}</p>
         <p>Species: {personajes.species}</p>
         <p>Gender: {personajes.gender}</p>
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