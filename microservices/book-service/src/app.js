const express = require("express")
const app = express()

const response = {
    data: [],
    services: "Book Service", // Nombre del servicio.
    architecture: "Microservices" // Diferencia la arq cuando se consuma.
}

const logger = msg => console.log("[Book Service]: " + msg)

// middleware para limpiar el data[].
app.use((req, res, next) => {
    response.data = []
    next()
})

app.get('/v2/api/books', (req, res) => {
    response.data.push(
        "The clean coder", 
        "The pragmatic programer", 
        "Soft skills")
    logger("Get book data")
    return res.send(response)
})

module.exports = app