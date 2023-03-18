
import { Link } from "react-router-dom";
import style from "./Card.module.css"
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState } from "react";

function Card({ id, name, gender, species, image, onClose, removeFavorite, addFavorite }) {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({ id, name, gender, species, image, onClose, removeFavorite, addFavorite})
      }
   }

   return (
      <div className={style.contenedor}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )}


         <button onClick={() => onClose(id)} className={style.boton}>X</button>
         <Link className={style.nombre} to={`/detail/${id}`}><h2 >Name:  {name} </h2> </Link>
         <img className={style.imagen} src={image} alt="" />

         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
   );
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },
      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      },
   };
};

export default connect(null, mapDispatchToProps)(Card);