const validation = (userData, error) => {
    const errors = { ...error };

    if (!userData.username) errors.username = "ingresar email";
    else if (userData.username.length > 35) errors.username = "No puede superar los 35 caracteres";
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) errors.username = "Email invalido";
    else errors.username = "";


    if (!userData.password) errors.password = "ingrese un password";
    else if (userData.password.length < 6)
        errors.password = "Ingrese mas de 6 caracteres";
    else if (userData.password.length > 10)
        errors.password = "Ingrese menos de 10 caracteres";
    else if (!/\d/.test(userData.password))
        errors.password = "Debe contener al menos un numero";
    else
        errors.password = "";
    return errors;
}

export default validation;