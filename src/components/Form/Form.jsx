import style from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";


const Form = ({Login}) => {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value });
        setErrors(validation({ ...userData, [property]: value }, errors));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        Login(userData);
    }
    return (
        <form onSubmit={submitHandler} className={style.contenedor} >
            <div >
                <h1 className={style.Bienvenida}>BIENVENIDOS A MI PROYECTO DE RICK & MORTY</h1>
            </div>
            <div className={style.contenedorlogin}><div>
                <label className={style.label} htmlFor="username">USERNAME: </label>
                <input className={errors.username ? style.Denegado : style.Aprovado}
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange} />
                <p className={style.Perror}>{errors.username}</p>
            </div>
                <div>
                    <label className={style.label} htmlFor="password">PASSWORD: </label>
                    <input className={errors.password ? style.Denegado : style.Aprovado}
                        type="text"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange} />
                    <p className={style.Perror}>{errors.password}</p>
                </div>
                <button className={style.boton}>LOGIN</button></div>

        </form>

    )
}
export default Form;