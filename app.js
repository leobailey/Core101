
/* var myVue = new Vue({
    el: '#vueapp',
    data: {
      message: 'Hello from Vue! we meet again!!'
    }
  }) */

  var express = require('express');
  var app  = express();
  var port = process.env.PORT || 3000
  app.get('/', (req, res) => {
    res.send('Welcome to my API');
  })

  app.listen(port, ()=>{
    console.log('Running on port ' + port);
  });