const request = require("request")

const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=be545734a4bc5737cf13a41bca6a8cbd&query='+latitude+','+longitude+'&units=f'

    request({ url,json: true },(error,{body})=>{
    if(error){
        callback('Unable to connect to weather services')
    }else if(body.error){
        callback('Unable to find location')
    }else{
        callback(undefined,body.current.weather_descriptions[0] + ' It is currenty ' + body.current.temperature + ' degrees out.')
    }
})
}

module.exports = forecast