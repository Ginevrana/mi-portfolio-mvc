const express = require ('express')
const app = express()
const port = 3000
const rutaMain = require ('./routers/main')
const rutaAbout = require ('./routers/about')

app.use(express.static('public'));

app.listen(port, ()=> {
    console.log("Server corriendo en http://localhost:" + port);
});

app.use('/', rutaMain);
app.use('/about', rutaAbout);