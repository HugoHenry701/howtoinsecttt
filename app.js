const express = require("express")
const handlebars = require("express-handlebars")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")

let app = express()

app.engine("handlebars", handlebars({ defaultLayout: "defaultLayout" }))
app.set("view engine", `handlebars`)
app.use(bodyparser.urlencoded({ extended: false }))

app.use(express.static("public"))

let dblink = `mongodb://localhost/final-project-database`;
mongoose.connect(dblink, { useNewUrlParser: true }, err => {
    if (err) { console.log(err) } else {
        console.log("Database is connected")
    }
})
let port = 2000
app.listen(port, err => {
    if (err) { console.log(err) } else {
        console.log(`App listen at ${port}`)
    }
})

//setting for routers
const homeRouter = require("./Routers/homeRouter")
const manageRouter = require("./Routers/manageRouter")
app.use("/", homeRouter)
app.use("/manage", manageRouter)