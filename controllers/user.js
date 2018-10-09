var sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
   //Register form
   const registerForm = (request, response) =>{
      response.render('user/New');
   }

   const createUser = (request, response) => {
      db.user.create(request.body, (error, queryResult) => {
          if (error) {
            console.error('error getting user:', error);
            response.sendStatus(500);
          }

          if (queryResult.rowCount >= 1) {
            console.log('User created successfully');

            //response.cookie('username', request.body.name);
          } else {
            console.log('User could not be created');
          }

          // redirect to home page after creation
          response.redirect('/');

      })
   }
  /**
   * ===========================================
   * Login Function for user
   * ===========================================
   */



  /**
   * ===========================================
   * Following other users
   * ===========================================
   */




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return{
    registerForm,
    createUser
  };

};