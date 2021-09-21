const express = require('express')
const app = express()
require('./database')

app.set("PORT", process.env.PORT || 4000)
app.use("/alumnos", require('./routes/alumnos.routes'))
app.use("/alta", require('./routes/alumnos.routes'))

app.listen(app.get("PORT"), () => {
    console.log(`Se inició el servido en el puerto ${app.get("PORT")}`)
})