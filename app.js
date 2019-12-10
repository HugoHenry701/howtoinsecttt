const express = require("express")
const handlebars = require("express-handlebars")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')

let app = express()

app.engine("handlebars", handlebars({ defaultLayout: "defaultLayout" }))
app.set("view engine", `handlebars`)
app.use(bodyparser.urlencoded({ extended: false }))

app.use(express.static("public"))
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 100,
    keys:[keys.session.cookieKey]
}))

//intialize passport
app.use(passport.initialize())
app.use(passport.session());

// let dblink = `mongodb://localhost/final-project-database`;
mongoose.connect(keys.mongodb.dbURL, { useNewUrlParser: true }, err => {
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
const authRouter = require("./Routers/authRouter")
const passportSetup = require('./config/passportSetup')
const profileRouter = require('./Routers/profileRouter')
app.use('/profile',profileRouter)
app.use("/", homeRouter)
app.use('/auth', authRouter)
app.use("/manage", manageRouter)
