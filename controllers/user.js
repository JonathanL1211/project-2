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

   const loginForm = (request, response) => {
      response.render('user/Login');
   }

   const loginStatus = (request, response) => {
      db.user.login(request.body, (error, queryResult) => {
        if (error) {
            console.error('Query error:', error.stack);
        }
        else {
            //console.log(res.rows[0].id);
            if (Object.keys(queryResult.rows).length == 0){
                response.send("Cannot find username!");
            }
            else {
                let user_id = queryResult.rows[0].id;
                //use SALT for extra security
                const SALT = "giving free javascript textbooks";
                let currentSessionCookie = sha256( user_id + 'logged_id' + SALT);
                // run user input password through bcrypt to obtain hashed password
                console.log('QUERYRESULTS LOGINSTATUS: ', queryResult.rows);
                var hashedValue = sha256(request.body.password);
                if(hashedValue === queryResult.rows[0].hashedpassword){
                    response.cookie('ID cookie ', user_id);
                     // drop cookies to indicate user's logged in status and username
                    response.cookie('loggedIn', currentSessionCookie);
                    response.cookie('Username', request.body.name);
                    //response.render('user/Index', {user:queryResult.rows});
                    response.redirect('/home');
                }

                else{
                    response.send('PASSWORD DOES NOT MATCHED! PLEASE TRY AGAIN!');
                    //response.redirect('/users/login'); //Somehow still got a cookie added!
                }
            }
        }
      })
  }

    const homePage = (request, response)=>{
        response.render('user/Home');
    }


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
    createUser,
    loginForm,
    loginStatus,
    homePage
  };

};