import {useDispatch, useSelector} from "react-redux"
import Card from "../Card/Card"

const Favorites = () => {
   
    
    const favorites = useSelector(state=>(state.myFavorites))


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