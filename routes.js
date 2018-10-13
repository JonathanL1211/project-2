module.exports = (app, db) => {

  const users = require('./controllers/user')(db);
  const bookPosts = require('./controllers/bookPost')(db);
  const comments = require('./controllers/comment')(db);

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

  //Edit page
  app.get('/profile/:id/edit', users.editProfile)
  app.put('/profile/:id', users.update);

  //Delete User


  /*
   *  =========================================
   *  Book Posts
   *  =========================================
   */
  //new book posts form
  app.get('/post', bookPosts.newPostForm);
  app.post('/posts', bookPosts.createPost);

  //display book post page!
  app.get('/post/:id', bookPosts.displayPostPage);

  //edit and update book post
  app.get('/post/:id/edit', bookPosts.editPostPage);
  app.put('/post/:id', bookPosts.update);

  //Delete book post
  app.get('/post/:id/delete', bookPosts.deletePost);
  app.delete('/post/:id',bookPosts.deletePost);

  /*
   *  =========================================
   *  Comments
   *  =========================================
   */
   //app.get('/post/:id/comment', comments.createComment);
   app.post('/post/:id/comment', comments.createComment);


   // app.get('/tweets/new', tweets.tweetBox);
   // app.post('/tweets', tweets.createTweet);
   // app.get('/tweets', tweets.displayAllTweets);




};