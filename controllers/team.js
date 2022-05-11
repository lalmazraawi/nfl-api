const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.status(200).send(teams)
}

const getTeamById = (request, response) => {
  const id = Number(request.params.id)

  const foundTeam = teams.find((team) => {
    return team.id === id
  })

  return response.status(200).send(foundTeam)
}

const saveNewTeam = (request, response) => {
  const { id, location, mascot, abbreviation, conference, division } = request.body

  if (!id || !location || !mascot || !abbreviation || !conference || !division) {
    // eslint-disable-next-line max-len
    return response.status(400).send('The following fields are required: id, location, mascot, abbreviation, conference, division')
  }

  const newTeam = { id, location, mascot, abbreviation, conference, division }

  teams.push(newTeam)

  return response.status(201).send(newTeam)
}
const createId = () => {
    const idArray = teams.map((team) =>{
        return team.id

    })

}

module.exports = { getTeamById, getAllTeams, saveNewTeam }
