import movieRoutes from './movies.js'
import accountRoutes from './accounts.js'

const constructorMethod = (app) => {
    app.use('/movies', movieRoutes)
    app.use('/', accountRoutes)
    app.use(/(.*)/, (req, res) => {
        return res.status(404).json({ error: 'Not found' })
    })
};

export default constructorMethod;