const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ef75e85b4994e8d3298b2594c97e578c&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degree Celsius out. It feels like ' + body.current.feelslike + ' degree Celsius out. There is a ' + body.current.precip + ' % chance of rain.')
        }
    })
}

module.exports = forecast