const express = require('express')

// Creating express app
const app = express()

// Setup port to listen for requests
app.listen(5500)

// Routes and endpoints handling
app.get("/", (req, res) => {

    // Same as .write and .end
    app.send('<p>Express home page<p>')
})


