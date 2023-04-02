import style from "./Cards.module.css"
import Card from '../Card/Card.jsx';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getfavorites } from "../../redux/actions";

export default function Cards({personajes, onClose}) {
   const dispatch = useDispatch();
    
   useEffect(()=>{
       dispatch(getfavorites())
   },[])
   return <div>
      <h1 className={style.titulo}>RICK & MORTY</h1>
      
      {personajes.map(({id,name, species, gender, image})=>{
         return (<Card
         id = {id}
         onClose = {onClose}
         name = {name}
         species = {species}
         gender = {gender}
         image = {image}
         />
         );
      })}
   </div>;
}
