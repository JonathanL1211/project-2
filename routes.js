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
  app.post('/loginData', users.pageAfterLogin);
  app.get('/home', users.redirectHome);

  //Logged out page
  app.get('/logout', users.loggedOut)

  //profile page (getting your own profile)
  app.get('/profile/:id', users.userProfile);

  //getting other user's profile
  //app.get('/profile/:id', users.otherUserProfile);



  /*
   *  =========================================
   *  Tweets
   *  =========================================
   */

   // app.get('/tweets/new', tweets.tweetBox);
   // app.post('/tweets', tweets.createTweet);
   // app.get('/tweets', tweets.displayAllTweets);




};