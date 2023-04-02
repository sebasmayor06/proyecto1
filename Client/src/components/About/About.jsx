import React from "react";
import style from "./About.module.css";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1 className={style.contenedor}> RICK & MORTY</h1>
                <div className={style.div}><h3 className={style.p}>¡Bienvenido al universo de Rick and Morty! Esta es una aplicación de cartas diseñada 
                    para todos los fanáticos de la serie que podrán disfrutar de emotivos momentos
                    con los personajes más locos y extravagantes de la televisión. Cada carta representa 
                    un personaje de la serie.
                    Prepárate para experimentar una emocionante aventura. 
                    ¿Estás preparado? ¡Que comience el juego!</h3></div>
                
            </>
        )
    }
}
export default About;