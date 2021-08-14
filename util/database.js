const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://dbUser:F*6ucZhkx3YwU7b@cluster0.obba8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(client => {
        console.log('connected')
        callback(client)
    }).catch(err => {
        console.log(err)
    })
}

module.exports = mongoConnect