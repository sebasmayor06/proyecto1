import Cards from './components/Cards/Cards.jsx'
import { useState } from 'react'
import Nav from "./components/Nav/Nav.jsx"
import style from "./App.module.css"
import { Route, Routes } from 'react-router-dom';
import {Link} from "react-router-dom"




function App () {
  const [personajes,setPersonajes] = useState([]);
  
  function onSearch(id) {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const Key = "0566f4c9fc9c.87c05fc0a438b7c78418";
    fetch(`${URL_BASE}/character/${id}?key=${Key}`)
      .then((response) => response.json())
      .then((data) => {
          if (data.name) {
          setPersonajes((oldChars)=>[...oldChars, data]);
          } else {
            alert('No hay personajes con ese ID');
          }
      });
}
const onClose = (id) => {
  setPersonajes (personajes.filter(char=>char.id !== id))
};

  return (
    <div >
    
        <div className={style.nav}>
        
        
            <Link to="/details"><h3 className={style.botonlink}>DETAILS</h3></Link>
            <Link to="/home"><h3 className={style.botonlink}>HOME</h3></Link>
            <Link to="/"><h3 className={style.botonlink}>LANDING</h3></Link>
            
      </div>
<Routes>
      <Route   path="/" element={ <div className={style.contenedor}>
     <h1 className={style.Bienvenida}>BIENVENIDOS A MI PROYECTO DE RICK & MORTY</h1>
     <button className={style.boton}>INGRESAR</button>
    </div>}/>

      <Route path="/home" element={<div className={style.App}>
      <Nav onSearch={onSearch} />
        <Cards personajes={personajes}
        onClose={onClose}/>
      </div>}/>

      
      </Routes>
    </div>
  )
}

export default App
