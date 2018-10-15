const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const db = require('./db');
const fileUpload = require('express-fileupload');

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */
const app = express();

// Set up middleware
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true
}));

// Set up file-upload
app.use(fileUpload());
//To allow to link to public
app.use(express.static('public'));

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Routes
 * ===================================
 */

// Import routes to match incoming requests
require('./routes')(app, db);
// Root GET request (it doesn't belong in any controller file)
app.get('/', (request, response) => {
    if (request.cookies['loggedIn'] !== undefined){
        response.redirect('/home');
    }
    else{
        response.render('user/Homepage');
    }
});

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
//const PORT = process.env.PORT || 3000;

//const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));

// Run clean up actions when server shuts down
// server.on('close', () => {
//   console.log('Closed express server');

//   db.pool.end(() => {
//     console.log('Shut down db connection pool');
//   });
// });