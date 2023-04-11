import {useDispatch, useSelector} from "react-redux"
import Card from "../Card/Card"
import { useEffect } from "react";
import { getfavorites } from "../../redux/actions";

const Favorites = () => {
   
    
    const favorites = useSelector(state=>(state.myFavorites))
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getfavorites())
    },[])

return (

<>

{
    favorites.map(({name, id, species, gender, image}) =>{
        return (<Card
        id = {id}
        name = {name}
        species = {species}
        gender = {gender}
        image = {image}
        />);
})}

</>
)



};
export default Favorites;