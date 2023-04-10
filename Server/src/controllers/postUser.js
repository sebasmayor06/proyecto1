// const {User} = require("../DB_connection")


// const postUser = async (req, res)=>{

//     const {email, password} = req.body;

//     try {
//         if(!email || !password && email ==="" || password===""){
//             res.status(400).send("Faltan datos")
//         }else{
//             const usuario = await User.findOrCreate(req.body);
//             return res.status(200).json(usuario)
//         }
//     } catch (error) {
//         return res.status(500).send(error.message)
//     }


// }

// module.exports=postUser;

