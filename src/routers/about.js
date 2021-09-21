// Se pueden simplificar estas dos líneas en una así:
// const router = require('express').Router()
const express = require ('express');
const router = express.Router();
// Se requiere directamente el método del objeto literal que queremos usar
const {about} = require('../controllers/aboutController')

router.get('/about', about);

module.exports = router;