// Se requiere path
const path = require('path')

// Se define ruta como objeto literal
const homeController = {
    home: (req,res) => {
        res.sendFile(path.join(__dirname, '..','views','home.html'))
    },
};


// Se exporta para usar en routes
module.exports = homeController