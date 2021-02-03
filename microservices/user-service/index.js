const server = require("./src/app")
require('dotenv').config()

server.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT} of User Service`)
})