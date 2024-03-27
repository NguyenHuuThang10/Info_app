const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')
const routes = require('./routes')
const db = require('./config/db')

const app = express()
const port = 3000

db.connect()

app.use(methodOverride('_method'))

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.use(morgan('combined'))

app.engine("hbs", engine({
    extname: 'hbs',
    helpers: {
        sum: (a,b) => a+b
    }
}))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "resources", "views"))

routes(app)

app.listen(port, () => {
    console.log("App listening port 3000!")
})