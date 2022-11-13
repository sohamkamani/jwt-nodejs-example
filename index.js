const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const { signIn, welcome, refresh, logout } = require('./handlers')

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())

app.post('/signin', signIn)
app.get('/welcome', welcome)
app.post('/refresh', refresh)
app.get('/logout', logout)

app.listen(8000)
