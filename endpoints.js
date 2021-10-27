module.exports = function (app) {

    app.get('/api/v1/stadiums', (req, res) => {

        /* #swagger.tags = ['Estádos']
           #swagger.description = 'Endpoint para resgatar os estádios.' */

        /* #swagger.responses[200] = { 
               schema: {
                    "result": [
                        "nome do estádio",
                    ]
                },
               description: 'get stadiuns.' 
        } */
        if (false)
            return res.status(404).send(false)
        return res.status(200).send(data)
    })

    app.get('/api/v1/games', (req, res) => {

        /* #swagger.tags = ['Jogos']
           #swagger.description = 'Endpoint para resgatar os jogos.' */

        /* #swagger.responses[200] = { 
               schema: {
                    "result": [
                        {
                          "id": "cttzhhcg9",
                          "soccerTeam1": "1",
                          "soccerTeam2": "2",
                          "golsSoccerTeam1": "1",
                          "golsSoccerTeam2": "1",
                          "typeGame": "Final",
                          "stadium": "Estádio Lusail"
                        }
                    ]
                },
               description: 'get game.' 
        } */
        if (false)
            return res.status(404).send(false)
        return res.status(200).send(data)
    })

    app.post('/api/v1/game', (req, res) => {

        /* #swagger.tags = ['Jogos']
           #swagger.description = 'Endpoint para adicionar um novo jogo.' */

        /* #swagger.parameters['newGame'] = {
               in: 'body',
               description: 'Informações do jogo.',
               required: true,
               type: 'object',
               schema: {
                          "soccerTeam1": "1",
                          "soccerTeam2": "2",
                          "golsSoccerTeam1": "1",
                          "golsSoccerTeam2": "1",
                          "typeGame": "Final",
                          "stadium": "Estádio Lusail"
                        },
        } */

        const newGame = req.body

        if (true) {
            // #swagger.responses[201] = { description: 'Game added with success' }
            return res.status(201).send(data)
        }
        return res.status(500)
    })

    app.get('/api/v1/soccerTeams', (req, res) => {

        /* #swagger.tags = ['Seleções']
           #swagger.description = 'Endpoint para resgatar as seleções.' */

        /* #swagger.responses[200] = { 
               schema: {
                    "result": [
                        {
                          "id": "cttzhhcg9",
                          "country": "Brazil",
                          "trainer": "Titi",
                        }
                    ]
                },
               description: 'get soccer teams.' 
        } */
        if (false)
            return res.status(404).send(false)
        return res.status(200).send(data)
    })

    
    app.post('/api/v1/soccerTeam', (req, res) => {

        /* #swagger.tags = ['Seleções']
           #swagger.description = 'Endpoint para adicionar uma nova seleção.' */

        /* #swagger.parameters['soccerTeam'] = {
               in: 'body',
               description: 'Informações da seleção.',
               required: true,
               type: 'object',
               schema: {
                          "country": "Brazil",
                          "trainer": "Titi",
                        },
        } */

        const soccerTeam = req.body

        if (true) {
            // #swagger.responses[201] = { description: 'Soccer Team added with success' }
            return res.status(201).send(data)
        }
        return res.status(500)
    })


    app.get('/api/v1/rating', (req, res) => {

        /* #swagger.tags = ['Classificação']
           #swagger.description = 'Endpoint para resgatar as Classificação.' */

        /* #swagger.responses[200] = { 
               schema: {
                    "result": [
                        {
                          "id": "cttzhhcg9",
                          "soccerTeam": "Brazil",
                          "gols": "20",
                        }
                    ]
                },
               description: 'get soccer teams.' 
        } */
        if (false)
            return res.status(404).send(false)
        return res.status(200).send(data)
    })

    app.post('/api/v1/rating', (req, res) => {

        /* #swagger.tags = ['Classificação']
           #swagger.description = 'Endpoint para adicionar uma nova classificação.' */

        /* #swagger.parameters['newRating'] = {
               in: 'body',
               description: 'Informações da seleção.',
               required: true,
               type: 'object',
               schema: {
                          "rating": "1°",
                          "soccerTeam": "Brazil",
                          "gols": "20",
                        },
        } */

        const newRating = req.body

        if (true) {
            // #swagger.responses[201] = { description: 'Rating added with success' }
            return res.status(201).send(data)
        }
        return res.status(500)
    })
    

}