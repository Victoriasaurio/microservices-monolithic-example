const express = require("express")
const app = express()

const response = {
    data: [],
    services: "Car Service", // Nombre del servicio.
    architecture: "Microservices" // Diferencia la arq cuando se consuma.
}

const logger = msg => console.log("[Car Service]: " + msg)

// middleware para limpiar el data[].
app.use((req, res, next) => {
    response.data = []
    next()
})

app.get('/v2/api/cars', (req, res) => {
    response.data.push(
        "Ferrari", 
        "Fiat", 
        "BMW")
    logger("Get car data")
    return res.send(response)
})

module.exports = app