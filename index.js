const bodyParser = require('body-parser')
const helmet = require('helmet')
const express = require('express')
const app = express()
// const redis = require('redis')
const http = require('http').createServer(app)
const path = require('path')
const c_main = require('./app/controllers/controller_main')
const app_config = require('./app/config/app.json')
const cookieParser = require('cookie-parser')
// const redis_config = require('./app/config/redis.json')
const session = require('express-session')
// const RedisStore = require('connect-redis')(session)
// const passport = require("./app/module/passport")
const flash = require('express-flash');
// const client = redis.createClient({
//     host: redis_config.host,
//     port: redis_config.port,
// })


// Enable proxy for get secure https
app.enable("trust proxy")

// Views
app.set('views', path.join(__dirname, 'app/views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(helmet({
    frameguard: false
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname + '/public')))
// app.use(session({
//     store: new RedisStore({
//         client: client,
//         ttl: 3600,
//         logErrors: true
//     }),
//     secret: app_config.secret,
//     resave: false,
//     unset: 'destroy',
//     saveUninitialized: true
// }))
// app.use(passport.initialize())
// app.use(passport.session())
app.use(cookieParser())
app.use(flash());

app.use('/', c_main)

http.listen(app_config.port, () => console.log('lawvia listening on port ' + app_config.port))
