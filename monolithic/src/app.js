const express = require("express")
const app = express()

const response = {
    data: [],
    services: "Monolithic Service", // Nombre del servicio.
    architecture: "Monolithic" // Diferencia la arq cuando se consuma.
}

// middleware para limpiar el data[].
app.use((req, res, next) => {
    response.data = []
    next()
})

app.get('/v1/api/users', (req, res) => {
    response.data.push("Victoria", "Pato", "Saurio")
    return res.send(response)
})

app.get('/v1/api/books', (req, res) => {
    response.data.push(
        "The clean coder", 
        "The pragmatic programer", 
        "Soft skills")
    return res.send(response)
})

app.get('/v1/api/cars', (req, res) => {
    response.data.push(
        "Ferrari", 
        "Fiat", 
        "BMW")
    return res.send(response)
})

module.exports = app