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
            // invoke callback function with results after query has executed
            callback(error, queryResult);
      });
    };

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

    // const userDisplay = (user, callback) => {
    //   //Set Up query!
    //   let queryString = "SELECT * from users WHERE users.id = '" + user.id + "';";

    //   // execute query
    //   dbPoolInstance.query(queryString, (error, queryResult) => {
    //     // invoke callback function with results after query has executed
    //     callback(error, queryResult);
    //   });
    // };

   //  /**
   // * ===========================================
   // * Following other users
   // * ===========================================
   // */

   // const followUser = (user, cookie, callback) => {
   //    const parseFollowerId = parseInt(user.follower_id);
   //    const parseCookie = parseInt( cookie['ID cookie'] );
   //    console.log("USER FOLLOWER ID: ", user.follower_id);
   //    console.log("COOKIE FOLLOWER ID: ", cookie['ID cookie']);


   //    const queryString = 'INSERT INTO followers (user_id, follower_user_id) VALUES ($1, $2)';

   //    const values = [
   //      parseCookie,
   //      parseFollowerId
   //    ]

   //    dbPoolInstance.query(queryString, values, (error, queryResult) => {
   //      // invoke callback function with results after query has executed
   //      callback(error, queryResult);
   //    });
   // }


    return {
      create,
      login,
      profile,
      update

    };
};