const express = require('express')
const showController = require('../controllers/show.controller')
const showRoutes = express.Router()

showRoutes.get('/shows', showController.getAllShows)

module.exports = showRoutes
