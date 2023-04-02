const axios = require("axios");

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const KEY = "0566f4c9fc9c.87c05fc0a438b7c78418";

const getCharById = (req, res) => {


    const params = req.params;

axios(`${URL_BASE}/character/${params.id}?key=${KEY}`)
.then(response=>{
    const {id, name, species, image, gender}= response.data;
    const obj = {
        id, 
        name, 
        species, 
        image, 
        gender
    }
    res.status(200).json(obj);
})
.catch(error => {
    res.status(500).json(error.message)
})
}




module.exports=getCharById;





// const axios = require("axios");

// const URL_BASE = "https://be-a-rym.up.railway.app/api";
// const KEY = "0566f4c9fc9c.87c05fc0a438b7c78418";



// const success = (response,res)=>{
// const {id, name, gender, species, origin, image, status} = response.data;
//     res.writeHead (200, {"Content-Type": "application/json"});
//     res.end(JSON.stringify({id, name, gender, species, origin, image, status}))

// }

// const errors = (error, res)=>{
//     res.writeHead(500, {"Content-Type": "text/plain"})
//     res.end(error.message)
// }

// const getCharById = (res, id) =>{
//     axios(`${URL_BASE}/character/${id}?key=${KEY}`)
//     .then(response => success(response,res))
//     .catch(error => errors(error,res))
// }

// module.exports = getCharById; 