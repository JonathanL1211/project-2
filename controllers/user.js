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
    registerForm
  };

};