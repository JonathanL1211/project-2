var sha256 = require('js-sha256');


/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    const create = (user, callback) => {
      // run user input password through bcrypt to obtain hashed password

      var hashedValue = sha256(user.password);
      // set up query
      const queryString = "INSERT INTO users (name, hashedPassword, profileimage, bio, phoneNumber) VALUES ($1, $2, $3, $4, $5)";

      const values = [
        user.name,
        hashedValue,
        user.image,
        user.bio,
        user.contact
      ];

      // execute query
      dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    };

    const login = (user, callback) => {
      let trimName = user.name.trim(); //trim name so that whitespace doesnt matter for name
      //Set Up query!
      let queryString = "SELECT * from users WHERE name = '" + trimName + "';";

      // execute query
      dbPoolInstance.query(queryString, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    };

    //  /**
   // * ===========================================
   // * User's profile
   // * ===========================================
   // */

    const profile = (params, callback) => {
      //Set Up query!
      let queryString = "SELECT * FROM users WHERE users.id = '" + params.id + "';";

      // execute query
      dbPoolInstance.query(queryString, (error, queryResult) => {
            const firstQueryString = queryResult;
            let queryString2 = "SELECT * FROM bookposts WHERE user_id = '" + params.id + "';";
            dbPoolInstance.query(queryString2, (err, res) =>{
                callback(err, firstQueryString, res);
            })
      });
    };

    //get info for forms
    const getUserInfo = (params, callback) => {
        let queryString = "SELECT * FROM users WHERE id = ($1)";
        const value = [
            params.id
        ];
        // execute query
        dbPoolInstance.query(queryString, value, (error, queryResult) => {
          // invoke callback function with results after query has executed
          callback(error, queryResult);
        });
    }

    //UPDATING profile
    const update = (user, params, callback) => {

        var hashedValue = sha256(user.password);
        let queryString = "UPDATE users SET name = ($1), profileimage = ($2), hashedPassword = ($3), phoneNumber = ($4), bio = ($5) WHERE id = ($6) RETURNING *";

        const values = [
            user.name,
            user.image,
            hashedValue,
            user.contact,
            user.bio,
            params.id
        ];
        // execute query
        dbPoolInstance.query(queryString, values, (error, queryResult) => {
          // invoke callback function with results after query has executed
          callback(error, queryResult);
        });
    }

    //deleting profile
    const deleteUser = (params, callback) => {
        const queryString = "DELETE FROM users WHERE id = ($1)";
        const values = [
            params.id
        ];
        // execute query
        dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
          callback(error, queryResult);
        });
    }

    //  /**
   // * ===========================================
   // * User's profile
   // * ===========================================
   // */
    const homepagePost = (callback) => {
      const queryString = "SELECT * FROM bookposts ORDER BY id DESC";
      dbPoolInstance.query(queryString, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    }




    return {
      create,
      login,
      profile,
      getUserInfo,
      update,
      deleteUser,
      homepagePost
    };
};