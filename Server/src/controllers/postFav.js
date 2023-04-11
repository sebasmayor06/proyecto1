const { Favorite } = require("../DB_connection");

const postfav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;

    if (!name || !origin || !status || !image || !species || !gender)
      return res.status(401).json({ message: "Faltan datos" });

    const [personaje, created] = await Favorite.findOrCreate({
      where: { name:name},
      defaults: {name:name, origin:origin, status:status, image: image, species:species, gender:gender}
    });

    if(created) {
        const allPersonajes = await Favorite.findAll()
        res.status(200).json(allPersonajes)
    }else{
        res.status(404).send("YA EXISTE EL PERSONAJE")
    }

    // return res.status(200).json(personaje)
    // {return res.status(400).send("EL PERSONAJE YA EXISTE")}

  } catch (error) {
    res.status(500).send(error.message)
  }
};

module.exports=postfav;