const mongoose = require('mongoose')

const url = 'mongodb://username:password@ds259897.mlab.com:59897/googlemapsapi'

mongoose.connect(url)

const Marker = mongoose.model('Marker', {
    id: Number,
    name: String,
    description: [String],
    latitude: Number,
    longitude: Number,
    keywords: [String],
    favorite: Boolean
})

const marker = new Marker({
    id: 10,
    name: 'Joku mesta jossainS',
    description: ['Jossain päin, Helsinki'],
    latitude: 60.200001,
    longitude: 24.909001,
    keywords: ['Fun, frinds'],
    favorite: true
})

marker
    .save()
    .then(response => {
        console.log('marker saved!')
        mongoose.connection.close()
    })

/*Marker
    .find({})
    .then(result => {
        result.forEach(marker => {
            console.log(marker)
        })
        mongoose.connection.close()
    })*/
