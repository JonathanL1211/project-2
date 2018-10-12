var sha256 = require('js-sha256');


/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    /**
   * ===========================================
   * Creating and Displaying posts
   * ===========================================
   */
    const createPost = (post, cookie, callback) => {
      // set up query
      const queryString = "INSERT INTO bookposts (title, postimage, content, user_Id) VALUES ($1, $2, $3, $4) RETURNING *";

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

    const getPostInfo = (params, callback) =>{
      const queryString = "SELECT * FROM bookposts WHERE id = ($1)";
      const values=[
          params.id
      ];
      // execute query
      dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });

    }

    const updatePost = (post, params, callback) => {
      const queryString = "UPDATE bookposts SET title = ($1), postimage = ($2), content = ($3) WHERE id = ($4)";
      const values = [
        post.title,
        post.postimage,
        post.content,
        params.id
      ];
      // execute query
        dbPoolInstance.query(queryString, values, (error, queryResult) => {
          // invoke callback function with results after query has executed
          callback(error, queryResult);
        });
    }

    return {
      createPost,
      getPostInfo,
      updatePost
    };
};