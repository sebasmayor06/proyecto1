import style from "./Cards.module.css"
import Card from '../Card/Card.jsx';

export default function Cards({personajes, onClose}) {
   
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
