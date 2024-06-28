const express = require("express")
const app = express()
const path = require("path")
const port = 8000

app.listen(port, () => {
    console.log(`run on ${port}`)
})


const DIST_ = path.join(__dirname, "dist")
const HTML_ = path.join(DIST_, "index.html")

app.use(express.json())
app.use(express.static("dist"))

app.get("/", (req, res) => {
    res.sendFile(HTML_, function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})