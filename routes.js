module.exports = (app, db) => {

  const users = require('./controllers/user')(db);

  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // Register users
  app.get('/new', users.registerForm);
  app.post('/', users.createUser);

  //Login Form
  app.get('/login',users.loginForm);
  app.post('/login', users.loginStatus);
  //Page after login
  app.get('/home', users.homePage);



  /*
   *  =========================================
   *  Tweets
   *  =========================================
   */

   // app.get('/tweets/new', tweets.tweetBox);
   // app.post('/tweets', tweets.createTweet);
   // app.get('/tweets', tweets.displayAllTweets);




};