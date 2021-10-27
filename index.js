const express = require('express')
const app = express()
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
const service = require('./src/services')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
require('./endpoints')(app)


const router = express.Router()
router.get('/api/v1/soccerTeams', service.getSoccerTeams)
router.get('/api/v1/stadiums', service.getStadiums)
router.get('/api/v1/games', service.getGames)
router.get('/api/v1/ratings', service.getRatings)

router.post('/api/v1/soccerTeam', service.newSoccerTeam)
router.post('/api/v1/rating', service.newRating)
router.post('/api/v1/game', service.newGame)

router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/', router)

const porta = process.env.PORT;

app.listen(porta || 8081, () => {
    console.log('Server started on port 8081')
})
