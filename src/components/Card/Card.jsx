
import style from "./Card.module.css"
export default function Card({id, name, gender, species, image, onClose}) {
   return (
      <div className={style.contenedor}>
      <button onClick = {()=> onClose(id)} className={style.boton}>X</button>
      <img className={style.imagen} src={image} alt="" />
      <h2>Name: {name}</h2>
      <h2>Specie: {species}</h2>
      <h2>Gender: {gender}</h2>
      </div>
   );
}
