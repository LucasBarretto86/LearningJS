const express = require('express')
const PORT = 5500
// Creating express app
const app = express()

// Setup port to listen for requests
const server = app.listen(PORT, () => {
    console.log(`Listening port: ${PORT}`)
    console.warn(`http://localhost:${PORT}`)
})

// Register view engine
app.set('view engine', 'ejs')
app.set('views', './src/views/')

// Routes and endpoints handling
app.get("/", (req, res) => {
    res.sendFile('./src/views/index.html', { root: __dirname })
})

app.get("/about", (req, res) => {
    res.sendFile('./src/views/about.html', { root: __dirname })
})

app.get("/about-us", (req, res) => {
    res.redirect('/about')
})

app.get("/contact", (req, res) => {
    res.render('contact', { content: "This content got in as EJS got parsed by express" })
})


app.use((req, res) => {
    res.status(404).sendFile('./src/views/404.html', { root: __dirname })
})


// Util commands to be able to shutdown server gracefully
process.on('SIGTERM', () => {
    console.log('Received SIGTERM signal. Closing server gracefully.');
    // Perform cleanup tasks and close server connections.
    server.close(() => {
        console.log('Server closed gracefully.');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('Received SIGINT signal. Closing server gracefully.');
    // Perform cleanup tasks and close server connections.
    server.close(() => {
        console.log('Server closed gracefully.');
        process.exit(0);
    });
})