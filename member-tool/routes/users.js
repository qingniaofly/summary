import express from 'express'

const router = express.Router()

const userRouter = ({ memberTool }) => {
  /* GET users listing. */
  router.get('/', function (req, res, next) {
    res.send('respond with a resource')
  })

  router.post('/start', function (req, res, next) {
    // const {} = req.params

    memberTool.start().then(() => {
      res.statusCode = 200
      res.send('{"code":200}')
      next()
    })
    return
  })

  router.post('/stop', function (req, res, next) {
    // const {} = req.params

    memberTool.stop().then(() => {
      res.statusCode = 200
      res.send('{"code":200}')
      next()
    })
  })

  router.post('/add', function (req, res, next) {
    const { minQuitTimeout = 5000, maxQuitTimeout = 60000, minGroupCount = 10, maxGroupCount = 999, minPerGroup = 10, maxPerGroup = 999 } = req.body

    memberTool.load({
      minQuitTimeout,
      maxQuitTimeout,
      minGroupCount,
      maxGroupCount,
      minPerGroup,
      maxPerGroup,
    }).then(() => {
      next()
      res.statusCode = 200
      res.send('{"code":200}')
    })
  })

  return router
}

export default userRouter
