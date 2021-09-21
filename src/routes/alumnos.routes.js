const express = require('express')
const routes = express.Router()
const {obtenerAlumnos} = require('../controllers/alumnos.controller')
const {altaAlumnos} = require('../controllers/alumnos.controller')

routes.get("/", obtenerAlumnos)
routes.post("/", altaAlumnos)


module.exports=routes