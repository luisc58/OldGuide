
const mongoose = require('mongoose');


// start app
const app = require('./app');
app.set('port', 7777); //listen in port 7777
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
