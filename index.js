const express = require('express')
const axios = require('axios');
const app = express()
const path = require('path');
const port = 5000

app.get("/nasa/:APOD/:searchStartDate/:searchLastDate", (req,res) => {
  console.log(req);
  console.log(res);
  setTimeout(() => {
    var result = req.params.APOD === 'APOD' ? searchAPOD(req.params) : searchNEO(req.params);
    result
    .then(data => res.json({data : data}))//data => res.json({data : data}
    .catch(err => console.log(err));
    }, 3000);
});
app.get("/nasa/search/:searchNasa", (req,res) => {
  setTimeout(() => {
    var result = searchCollectionNASA(req.params.searchNasa.replace(/%20/g, " "));
    result
    .then(data => res.json({data : data}))//data => res.json({data : data}
    .catch(err => console.log(err));
    }, 3000);
});
async function translateText(res) {
  var formData = new FormData();
  formData.append("q", resDesc.explanation);
  formData.append("source", "en");
  formData.append("target", "fr");
  formData.append("format", "text");
  formData.append("api_key", "");
  try {
    const response = await new Promise((resolve, reject) => {
      axios
      .post('https://libretranslate.de/translate', formData,{headers: {'Accept': 'application/json'}})
      .then(res => {
        // console.log(res);
        resolve(res.data.translatedText);
      }).catch((error) => {
          console.log(error);
      });
    },10000);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
async function searchAPOD(options) {
  var key = 'JBEpdJhiuTuUFtFzEXwZ1zlnamrM1dbm38l23i5x';
  try {
    const response = await new Promise((resolve, reject) => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key='+key+'&start_date='+options.searchStartDate+'&end_date='+options.searchLastDate,{headers: {'Accept': 'application/json'}})
      .then(res => {
          resolve(res);
      }).catch((error) => {
          console.log(error);
      });
    },10000);
    // var descriptionTranslate = [];
    // for(var i=0; i<response.data.data.length; i++){
    //   descriptionTranslate.push(translateText(response.data.data[i]))
    // }
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
async function searchNEO(options) {
  var key = 'JBEpdJhiuTuUFtFzEXwZ1zlnamrM1dbm38l23i5x';
  console.log(options);
  try {
    console.log('https://api.nasa.gov/neo/rest/v1/feed?api_key='+key+'&start_date='+options.searchStartDate+'&end_date='+options.searchLastDate);
    const response = await new Promise((resolve, reject) => {
      axios.get('https://api.nasa.gov/neo/rest/v1/feed?api_key='+key+'&start_date='+options.searchStartDate+'&end_date='+options.searchLastDate,{headers: {'Accept': 'application/json'}})
      .then(res => {
          resolve(res);
      }).catch((error) => {
          console.log(error);
      });
    },10000);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
async function searchCollectionNASA(searchNasa) {
  try {
    const response = await new Promise((resolve, reject) => {
      axios.get('https://images-api.nasa.gov/search?q='+searchNasa,{headers: {'Accept': 'application/json'}})
      .then(res => {
          resolve(res);
      }).catch((error) => {
          console.log(error);
      });
    },10000);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
if(process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV);
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
}
app.use(express.static('public'));
app.get('/home*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, ()=>console.log(`Listening on port ${port}...`));