const keys = require('../../config/keys');
const axios = require('axios');
module.exports = app => {
  app.get('/api/cars', async (req, res) => {
    let jsonData = JSON.parse(req.query.userData);
    let apiFormatStartDate = requiredFormat(jsonData.startdate);
    let apiFormatEndDate = requiredFormat(jsonData.enddate);
    var queryParams = `&dest=${
      jsonData.dest
    }&startdate=${apiFormatStartDate}&enddate=${apiFormatEndDate}&pickuptime=${
      jsonData.pickuptime
    }&dropofftime=${jsonData.dropofftime}&format=json`;
    var URL = keys.DOMAIN_NAME + keys.API_KEY + queryParams;
    console.log(URL);
    let result = await axios.get(URL);
    //Since Api returns Errors List we can apply negation logic to
    //Check if error exsists or its a sucess
    if (result.data.Errors.length !== 0) {
      return res.status(401).json(result.data.Errors);
    } else {
      return res.status(result.status).json(result.data.Result);
    }
  });
};

function requiredFormat(myDateString) {
  var arr = myDateString.split('/');

  if (arr[0] > 9) {
    return myDateString;
  }

  arr[0] = '0' + arr[0];
  myDateString = arr.join('/');

  return myDateString;
}
