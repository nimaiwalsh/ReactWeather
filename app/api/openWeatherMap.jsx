var axios = require('axios');

//const (Constant variable, can't be changed)
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=01c8e25db1874a23e16fe594ae5a6ae0&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    //ES6 Template Strings (query strings) - can include an expression using ${}
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(response) {
        if(response.data.cod && response.data.message) {
          throw new Error(response.data.message);
        } else {
          return response.data.main.temp;
        }
      }, function(response) {
        throw new Error(response.data.message);
      });
  }
}
