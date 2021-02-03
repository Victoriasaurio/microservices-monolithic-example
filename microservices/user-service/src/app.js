const express = require("express")
const app = express()

const response = {
    data: [],
    services: "User Service", // Nombre del servicio.
    architecture: "Microservices" // Diferencia la arq cuando se consuma.
}

const logger = msg => console.log("[User Service]: " + msg)

// middleware para limpiar el data[].
app.use((req, res, next) => {
    response.data = []
    next()
})

app.get('/v2/api/users', (req, res) => {
    response.data.push("Victoriasaurio", "Patosaurio", "SaurioRex")
    logger("Get user data")
    return res.send(response)
})

module.exports = app