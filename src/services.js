var SOCCER_TEAM = []
var STADIUMS = [
 'Estádio Internacional Khalifa',
 'Estádio Lusail',
 'Estádio Al Bayt',
 'Estádio Cidade da Educação',
 'Estádio Al Janoub',
 'Estádio Al Thumama',
 'Estádio Ras Abu Aboud',
 'Estádio Al Rayyan',
]
var GAMES = []
var RATING = []

const getSoccerTeams = (req, res) => {
    res.json({ result: SOCCER_TEAM }, 200)
}

const getStadiums = (req, res) => {
    res.json({ result: STADIUMS }, 200)
}

const getGames = (req, res) => {
    res.json({ result: GAMES }, 200)
}

const getRatings = (req, res) => {
    res.json({ result: GAMES }, 200)
}

const newSoccerTeam = (req, res) => {
    var body = req.body;

    var data = {
        'id': Math.random().toString(36).substr(2, 9),
        'country': body.country,
        'trainer': body.trainer,
    }

    SOCCER_TEAM.push(data)
    res.json({ message: "Soccer Team added with success"}, 200)

}

const newRating = (req, res) => {
    var body = req.body;

    var data = {
        'id': Math.random().toString(36).substr(2, 9),
        'rating': body.rating,
        'soccerTeam': body.soccerTeam,
        'gols': body.gols,
    }
    RATING.push(data)
    res.json({ message: "Rating added with success"}, 200)

}

const newGame = (req, res) => {
    var body = req.body;
    
    var data = {
        'id': Math.random().toString(36).substr(2, 9),
        'soccerTeam1': body.soccerTeam1,
        'soccerTeam2': body.soccerTeam2,
        'golsSoccerTeam1': body.golsSoccerTeam1,
        'golsSoccerTeam2': body.golsSoccerTeam2,
        'typeGame': body.typeGame,
        'stadium': body.stadium,
    }
    GAMES.push(data)
    res.json({ message: "Game added with success"}, 200)

}


module.exports = {
    getSoccerTeams,
    getStadiums,
    getGames,
    getRatings,
    newSoccerTeam,
    newRating,
    newGame,
}
