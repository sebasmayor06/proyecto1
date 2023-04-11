const {User} = require("../DB_connection");


const postUser = async (req, res)=>{

    const {email, password} = req.body;

    try {
        if(!email || !password){
            res.status(400).send("Faltan datos")
        }else{
            const [usuario, created] = await User.findOrCreate({where:{email : email}, defaults:{email:email, password:password}});
            

            if(created) return res.status(200).json(usuario)
            return res.status(400).send("EL USUARIO YA EXISTE")
        }
        
    } catch (error) {
        return res.status(500).send(error.message)
    }


}

module.exports=postUser;

