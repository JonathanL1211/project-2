var sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logics
   * ===========================================
   */
   const newPostForm = (request, response) => {
      response.render('bookpost/new');
   }

   const createPost = (request, response) => {
      db.bookpost.createPost(request.body, request.cookies, (error, queryResult) => {
        console.log("request.body for CREATEPOST-------------------------------: ", request.body);
        //sconsole.log('QUERYRESULTS NEW POST -----------------**********------: ', queryResult.rows);
        if (error) {
            console.error('error getting user:', error);
            response.sendStatus(500);
        }
        if (queryResult.rowCount >= 1) {
            console.log('Created post successfully!');

          //if (request.body)

          //response.cookie('username', request.body.name);
        } else {
            console.log('Post not created!');
        }

        // redirect to home page after creation
        response.redirect('/profile/' + request.cookies['userId']);

      })
  }

  return{
      newPostForm,
      createPost
  };

};