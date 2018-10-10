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
  app.post('/home', users.loginStatus);

  //Logged out page
  app.get('/logout', users.loggedOut)

  //profile page
  app.get('/profile/:name', users.userProfile);



  /*
   *  =========================================
   *  Tweets
   *  =========================================
   */

   // app.get('/tweets/new', tweets.tweetBox);
   // app.post('/tweets', tweets.createTweet);
   // app.get('/tweets', tweets.displayAllTweets);




};