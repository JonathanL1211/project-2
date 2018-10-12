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
   const create = (comment, params, cookie, callback) => {
      const queryString = "INSERT INTO comments (bookposts_id, user_id, commentcontents) VALUES ($1, $2, $3) RETURNING *";
      const values = [
          params.id,
          cookie['userId'],
          comment.commentContent
      ];
      // execute query
      dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
   }

    return {
      create
    };
};