var sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Creating Comments
   * ===========================================
   */
   const createComment = (request, response) => {
      db.comment.create(request.body, request.params, request.cookies, (error, queryResult) => {
          if (error) {
              console.error('error getting user:', error);
              response.sendStatus(500);
          }
          if (queryResult.rowCount >= 1) {
              console.log('Comment added successfully!');

            //if (request.body)

            //response.cookie('username', request.body.name);
          } else {
              console.log('User could not be created');
          }

          // redirect to home page after creation
          response.redirect('/post/'+request.params.id);
      })
   }


  return{
      createComment
  };

};