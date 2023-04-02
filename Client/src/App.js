import Cards from './components/Cards/Cards.jsx'
import { useEffect, useState } from 'react'
import Nav from "./components/Nav/Nav.jsx"
import style from "./App.module.css"
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
import Form from './components/Form/Form.jsx';
import About from './components/About/About.jsx';
import Favorites from './components/Favorites/favorites.jsx';
import Detail from "./components/Detail/Detail"




function App() {
  const [personajes, setPersonajes] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
const navigate = useNavigate();

useEffect (()=>{
  !access && navigate("/");
},[access]);

  const username = "sebda06@gmail.com";
  const password = "sebas123";

const login=(userData)=>{
if (userData.username === username && userData.password === password ){
  setAccess(true);
  navigate('/About');
}else {alert("CREDENCIALES INCORRECTAS");}
};

  function onSearch(id) {

    
    if (personajes.find((char) => char.id === id)) {
      return alert("Personaje Repetido");
    }
const URL_BASE = "http://localhost:3001";
    fetch(`${URL_BASE}/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setPersonajes((oldChars) => [...oldChars, data]);
        } else {
          alert('No hay personajes con ese ID');
        }
      });
  }
  const onClose = (id) => {
    setPersonajes(personajes.filter(char => char.id !== id))
  };


  return (
    <div >

      {pathname !== "/" && <div className={style.nav}>
        <Link to="/favorites"><h3 className={style.botonlink}>FAVORITES</h3></Link>
        <Link to="/home"><h3 className={style.botonlink}>HOME</h3></Link>
        <Link to="/About"><h3 className={style.botonlink}>ABOUT</h3></Link>
      </div>
      }

      <Routes>
        <Route path="/" element={<Form  Login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/home" element={<div className={style.App}>
          <Nav onSearch={onSearch} />
          <Cards personajes={personajes}
            onClose={onClose} />
        </div>} />
        <Route path="/About" element={<About />} />



      </Routes>
    </div>
  )
}

export default App
