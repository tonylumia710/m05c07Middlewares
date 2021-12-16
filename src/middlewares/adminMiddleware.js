module.exports = (req,res,next) => {

    let usuariosValidos = ["Ada", "Greta", "Vim", "Tim"];
    if(usuariosValidos.includes(req.query.user )){
        next();
    }else{
        res.send("No tienes los privilegios para ingresar");
    }

}