import React from "react";
import style from "./About.module.css";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = {style.cont}>
                <div className={style.div}>
                    <h1 > RICK & MORTY</h1>
                    <h3>¡Bienvenido al universo de Rick and Morty! Esta es una aplicación de cartas diseñada 
                    para todos los fanáticos de la serie que podrán disfrutar de emotivos momentos
                    con los personajes más locos y extravagantes de la televisión. Cada carta representa 
                    un personaje de la serie.
                    Prepárate para experimentar una emocionante aventura. 
                    ¿Estás preparado? ¡Que comience el juego!</h3></div>
                
            </div>
        )
    }
}
export default About;