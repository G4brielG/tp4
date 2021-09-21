const {Schema, model} = require('mongoose')

const alumnoSchema = new Schema({
    nombre: {
        type: String, required: true
    },
    apellido: {
        type: String, required: true
    },
    dni: {
        type: String, required: true
    },
    direccion: {
        calle: {
            type: String, required: true
        },
        manzana: {
            type: Number, required: true
        },
        numCasa: {
            type: Number, required: true
        }
    },
    carrera: {
        type: String, required: true
    },
    anioCarrera: {
        type: String, required: true
    },
    intereses: {
        type: String, required: true
    },
    expLaboral: {
        type: String, required: true
    },
    conocimientos: {
        type: String, required: true
    },
    perfilGitHub: {
        type: String, required: true
    }
})

module.exports = model("alumnos", alumnoSchema)