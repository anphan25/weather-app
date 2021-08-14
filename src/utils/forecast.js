const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=6d44022c5ad92ff1d449f6e5804b0192&query=${latitude},${longitude}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to coonect cc", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]} It is currently ${Math.round(
          (body.current.temperature - 32) / 1.8
        )} degrees out. It feels like ${Math.round(
          (body.current.feelslike - 32) / 1.8
        )} degress out`
      );
    }
  });
};

module.exports = forecast;
