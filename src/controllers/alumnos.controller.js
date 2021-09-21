const alumnos = require('../models/alumnos.models')

const obtenerAlumnos = async(req, res) => {
    const mostrarAlumnos = await alumnos.find()
    res.json(mostrarAlumnos)
}

const altaAlumnos = async(req, res) => {
    try {
        const newAlumno = new alumno(req.body)
        await newAlumno.save()
        res.json({ 'Alumno': 'agregado correctamente' })
    } catch (err) {
        console.error('Error en altaAlumnos', err)
        res.json({ 'Error': err })
    }
}

module.exports = {
    obtenerAlumnos,
    altaAlumnos
}