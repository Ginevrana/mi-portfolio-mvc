// Se requiere path
const path = require('path')

// Se define ruta como objeto literal
const aboutController = {
    about: (req,res) => {
        res.sendFile(path.join(__dirname, '..','views','about.html'))
    },
};


// Se exporta para usar en routes
module.exports = aboutController