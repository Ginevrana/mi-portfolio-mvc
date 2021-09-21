// Se pueden simplificar estas dos líneas en una así:
// const router = require('express').Router()
const express = require ('express');
const router = express.Router();
// Se requiere directamente el método del objeto literal que queremos usar
const {home} = require('../controllers/mainController')

router.get('/', home);

module.exports = router