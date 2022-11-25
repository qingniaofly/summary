import createError from 'http-errors'
import express from 'express'
import expressWs from 'express-ws' // 引入 WebSocket 包
import path from 'path'
import { fileURLToPath } from 'url'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'
import memberRouter from './routes/member.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
expressWs(app) // 将 WebSocket 服务混入 app，相当于为 app 添加 .ws 方法

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const memberTool = memberRouter()
app.ws('/member', function (ws, req) {
  console.log('connect success')
  console.log(ws)

  // 使用 ws 的 send 方法向连接另一端的客户端发送数据
  ws.send('connect to express server with WebSocket success')

  // 使用 on 方法监听事件
  //   message 事件表示从另一段（服务端）传入的数据
  ws.on('message', function (msg) {
    memberTool.receive(msg)
    console.log(`receive message ${msg}`)
    // ws.send('default response')
  })

  memberTool.onmessage = function (msg) {
    ws.send(msg)
  }

  // 设置定时发送消息
  let timer = setInterval(() => {
    ws.send(`interval message ${new Date()}`)
  }, 2000)

  // close 事件表示客户端断开连接时执行的回调函数
  ws.on('close', function (e) {
    console.log('close connection')
    clearInterval(timer)
    timer = undefined
  })
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/member-api', usersRouter({ memberTool }))
// app.use('/member', memberRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
