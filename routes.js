module.exports = (app, db) => {

  const users = require('./controllers/user')(db);

  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // Register users
  app.get('/new', users.registerForm);



  /*
   *  =========================================
   *  Tweets
   *  =========================================
   */

   // app.get('/tweets/new', tweets.tweetBox);
   // app.post('/tweets', tweets.createTweet);
   // app.get('/tweets', tweets.displayAllTweets);




};