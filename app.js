require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const dir = require('node-dir')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 4000


// // Define static directory for top level app (portfolio)
app.use('/portfolio', express.static('style'))
// Setup virtual static dirs for each site
dir.files(path.join(__dirname, 'sites'), 'dir', (err, dirs) => {
    dirs.forEach(site =>
        app.use(
            `/${site}`,
            express.static(path.join(__dirname, `sites/${site}/style`)
        )
    ))
}, { shortName: true, recursive: false })


// // Routes
// Portfolio root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
// Dynamic routes for "child applications"
app.get('/site/:id/:page', (req, res) => {
    res.sendFile(path.join(__dirname, `sites/${req.params.id}/${req.params.page}.html`))
})

// // Start Server
app.listen(port, console.log(`Portfolio listenting on: ${host}:${port}`))