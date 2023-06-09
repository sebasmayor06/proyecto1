const {Router} = require("express");
const router = Router();
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const login = require("../controllers/login")
const postUser = require ('../controllers/postUser')
const postFav = require("../controllers/postFav")
let favs = require("../utils/favs")

router.get("/character/:id",getCharById)

router.get("/detail/:id",getCharDetail)

router.get("/rickandmorty/login", login)
router.post("/rickandmorty/login",postUser )

router.post("/rickandmorty/fav", postFav)

router.post("/rickandmorty/fav",(req,res)=>{
favs.push(req.body);
res.status(200).json(favs);
})


router.get("/rickandmorty/fav", (req,res)=>{
    res.status(200).json(favs);
})

router.delete("/rickandmorty/fav/:id", (req,res)=>{
    const {id}=req.params;
    
    if (!id) {res.status(404).json({error:"no se ingreso un id"})}
    else {
        let filtro=favs.filter(fav => fav.id !== id)
        res.status(200).json({success: true})

        favs=filtro;
    }

})



module.exports = router;