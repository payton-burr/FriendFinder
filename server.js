let express = require('express');

let PORT = process.env.PORT || 8080;

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRouting.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
