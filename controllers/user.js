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
        console.log("request.body for CREATE: ", request.body);
        console.log('QUERYRESULTS NEW: ', queryResult.rows);
        if (error) {
            console.error('error getting user:', error);
            response.sendStatus(500);
        }
        if (queryResult.rowCount >= 1) {
            console.log('User created successfully');

          //if (request.body)

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
                console.log("user.id=" , user_id);
                //use SALT for extra security
                const SALT = "giving free javascript textbooks";
                let currentSessionCookie = sha256( user_id + 'logged_id' + SALT);
                // run user input password through bcrypt to obtain hashed password
                //console.log('QUERYRESULTS LOGINSTATUS: ', queryResult.rows);
                var hashedValue = sha256(request.body.password);
                if(hashedValue === queryResult.rows[0].hashedpassword){
                    response.cookie('ID cookie', user_id);
                     // drop cookies to indicate user's logged in status and username
                    response.cookie('loggedIn', currentSessionCookie);
                    response.cookie('Username', request.body.name);
                    //response.render('user/Index', {user:queryResult.rows});
                    //console.log("login direct req cookies:", request.cookies['ID cookie']);
                    response.render('user/Home', {id: user_id});
                }

                else{
                    response.send('PASSWORD DOES NOT MATCHED! PLEASE TRY AGAIN!');
                    //response.redirect('/users/login'); //Somehow still got a cookie added!
                }
            }
        }
      })
  }

    /**
   * ===========================================
   * Logout function for user
   * ===========================================
   */

   const loggedOut = (request, response) => {
      response.clearCookie('loggedIn');
      response.clearCookie('Username');
      response.clearCookie('ID cookie ');
      response.redirect('/');

   }

   /**
   * ===========================================
   * Profile page of the user
   * ===========================================
   */
   //Displaying user index page
     const userProfile = (request, response) => {
        //console.log("Rest cookies: ", request.cookies)
        db.user.profile(request.cookies, (err, queryResult) => {
             if (err) {
               console.error('error getting user:', err);
               response.sendStatus(500);
             }
             else {
               console.log("QUERY RESULTS.ROWS: ", queryResult.rows);
             }
         })
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
    loggedOut,
    userProfile
  };

};