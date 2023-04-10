
import { Link } from "react-router-dom";
import style from "./Card.module.css"
import { connect, useDispatch } from "react-redux";
import { addFavorite, getfavorites, removeFavorite } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function Card({ id, name, gender, species, image, onClose, myFavorites }) {
   const [isFav, setIsFav] = useState(false);

   const dispatch = useDispatch();



   const addFavorite = (character) => {
      axios.post('http://localhost:3001/rickandmorty/fav', character)
      dispatch(getfavorites())
      .then((res)=> console.log('todo salio bien'))
   };
   
   const removeFavorite =(id) => {
      axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      dispatch(getfavorites())
      .then((res) => console.log('se ha eliminado exitosamente'))
   }



   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({ id, name, gender, species, image, onClose})
      }
   }

   useEffect(()=>{
      myFavorites.forEach((fav) => {
         if(fav.id === id){
            setIsFav(true);
         }
      });
   },[myFavorites, id]);

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
// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFavorite: (character) => {
//          dispatch(addFavorite(character));
//       },
//       removeFavorite: (id) => {
//          dispatch(removeFavorite(id));
//       },
//    };
// };

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect (mapStateToProps,null) (Card);