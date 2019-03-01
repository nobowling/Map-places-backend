const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))

const mongoose = require('mongoose')

const url = 'mongodb://nobowling:AjquCuH5NdtpDZ4@ds259897.mlab.com:59897/googlemapsapi'

mongoose.connect(url)

const formatMarker = (marker) => {
    return {
        name: marker.name,
        description: marker.description,
        latitude: marker.latitude,
        longitude: marker.longitude,
        id: marker._id,
        keywords: marker.keywords,
        favorite: marker.favorite
    }
}

const Marker = mongoose.model('Marker', {
    id: Number,
    name: String,
    description: [String],
    latitude: Number,
    longitude: Number,
    keywords: String,
    favorite: Boolean
})

app.get('/markers', (request, response) => {
    Marker
        .find({})
        .then(markers => {
            response.json(markers.map(formatMarker))
        })
})

app.post('/markers', (request, response) => {
    const body = request.body

    if (body.name === undefined) {
        return response.status(400).json({
            error: 'name missing'
        })
    }

    const marker = new Marker({
        name: body.name,
        description: body.description,
        latitude: body.latitude,
        longitude: body.longitude,
        keywords: body.keywords,
        favorite: body.favorite
    })

    marker
        .save()
        .then(savedMarker => {
            response.json(formatMarker(savedMarker))
        })
})

app.get('/markers/:id', (request, response) => {
    Marker
        .findById(request.params.id)
        .then(marker => {
            response.json(formatMarker(marker))
        })
        .catch(error => {
            console.log(error)
            response.status(404).end()
        })
})

app.delete('/markers/:id', (request, response) => {
    Marker
        .findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => {
            response.status(400).send({
                error: 'malformatted id'
            })
        })
})

app.put('/markers/:id', (request, response) => {
    const body = request.body

    const marker = {
        name: body.name,
        description: body.description,
        latitude: body.latitude,
        longitude: body.longitude,
        keywords: body.keywords,
        favorite: body.favorite
    }

    Marker
        .findByIdAndUpdate(request.params.id, marker, {
            new: true
        })
        .then(updatedMarker => {
            response.json(formatMarker(updatedMarker))
        })
        .catch(error => {
            console.log(error)
            response.status(400).send({
                error: 'malformatted id'
            })
        })
})

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)