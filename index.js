const express = require('express')
const bodyParser = require('body-parser')
const { getAllTeams, getTeamById, saveNewTeam } = require('./controllers/team')

const app = express()

app.get('/team', getAllTeams)

app.get('/team/:id', getTeamById)

app.post('/teams', bodyParser.json(), saveNewTeam)

app.listen(1300, () => {
  console.log('Listening @ https://localhost:1300') // eslint-disable-line no-console
})