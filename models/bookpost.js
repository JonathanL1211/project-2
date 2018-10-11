var sha256 = require('js-sha256');


/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    const createPost = (post, cookie, callback) => {
      // set up query
      const queryString = "INSERT INTO bookposts (title, postimage, content, user_Id) VALUES ($1, $2, $3, $4)";

      const values = [
        post.title,
        post.postimage,
        post.content,
        cookie['userId']
      ];

      // execute query
      dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    };

    return {
      createPost
    };
};