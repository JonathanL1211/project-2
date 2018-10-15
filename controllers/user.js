var sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logics
   * ===========================================
   */
   /**
   * ===========================================
   * Register form
   * ===========================================
   */

   //Register form
  const registerForm = (request, response) =>{
      response.render('user/New');
   }

  const createUser = (request, response) => {
      let path = '/media/';
      db.user.create(request.body, request.files.image, path , (error, queryResult) => {
        console.log("request.file for FILE: ", request.files.image);
        console.log("request.body for CREATE: ", request.body);
        console.log('QUERYRESULTS NEW: ', queryResult.rows);
        if (error) {
            console.error('error getting user:', error);
            response.sendStatus(500);
        }
        if (queryResult.rowCount >= 1) {
            console.log('User created successfully');
          //response.cookie('username', request.body.name);
                if (!request.files){
                    return response.status(400).send('No files were uploaded.');
                }
                // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
                let sampleFile = request.files.image;
                // Use the mv() method to place the file somewhere on your server
                sampleFile.mv('public/media/' + sampleFile.name, function(err) {
                  if (err){
                    return response.status(500).send(err);
                  }
                  console.log('File uploaded!');
                })
        } else {
            console.log('User could not be created');
        }
        // redirect to home page after creation
        response.redirect('/login');

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

  const pageAfterLogin = (request, response) => {
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
                // console.log("user.id=" , user_id);
                //use SALT for extra security
                const SALT = "giving free javascript textbooks";
                let currentSessionCookie = sha256( user_id + 'logged_id' + SALT);
                // run user input password through bcrypt to obtain hashed password
                //console.log('QUERYRESULTS LOGINSTATUS: ', queryResult.rows);
                var hashedValue = sha256(request.body.password);
                if(hashedValue === queryResult.rows[0].hashedpassword){

                    response.cookie('userId', user_id);
                     // drop cookies to indicate user's logged in status and username
                    response.cookie('loggedIn', currentSessionCookie);
                    response.cookie('Username', request.body.name);
                    //response.render('user/Index', {user:queryResult.rows});
                    //console.log("login direct req cookies:", request.cookies['ID cookie']);
                    // console.log("UYUYUYUYUYUYUYUYUYUYUYUYUYUYUYUY")
                    // console.log("UYUYUYUYUYUYUYUYUYUYUYUYUYUYUYUY")
                    // console.log("UYUYUYUYUYUYUYUYUYUYUYUYUYUYUYUY")
                    // console.log("UYUYUYUYUYUYUYUYUYUYUYUYUYUYUYUY")
                    //console.log('user id: ', request.cookies['userId']);
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

  //Redirect to homepage
   const redirectHome = (request, response) => {
     // console.log("HERREEEEEEEEEEEEEEEEEEEEE");
     // console.log(request.cookies);
     db.user.homepagePost((error, queryResult)=>{
        if (request.cookies['loggedIn'] !== undefined){
            response.render('user/Home', {cookie: request.cookies, res: queryResult.rows});
        }
        else {
            response.send("You are not logged in!")
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
      response.clearCookie('userId');
      //response.clearCookie('postId');
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
      db.user.profile(request.params, (err, firstqueryResult, secondqueryResult) => {
          if (err) {
            console.error('error getting user:', err);
            response.sendStatus(500);
          }
          else {
            //if(request.params === )
            //console.log("QUERY RESULTS.ROWS USER PROFILE111111 =------------: ", firstqueryResult);
            //console.log("QUERY RESULTS.ROWS USER PROFILE222222 =------------: ", secondqueryResult);
            response.render('user/Profile', {res: firstqueryResult.rows, post: secondqueryResult.rows, cookie:request.cookies});
          }
      })
  }

  /**
   * ===========================================
   * Editing profile
   * ===========================================
   */
   const editProfile = (request, response) => {
      db.user.getUserInfo(request.params, (error, queryResult) => {
          console.log("querrrryryyyyyy editttttttt", queryResult.rows);
          console.log("EDIT------------------------------------------");
          // console.log("cookies", request.cookies);
          if (error) {
            console.error('error getting user:', error);
            response.sendStatus(500);
          }
          if(request.cookies['userId'] != queryResult.rows[0].id){
            response.send("Cannot edit user!!");
          }else{
            response.render('user/Edit', {results: queryResult.rows});
          }
      })
   }

   const update = (request, response) => {
      let path = '/media/';
      db.user.update(request.body, request.params, request.files.image, path, (error, queryResult) => {
        // console.log("request.body for UPDATE: ", request.body);
        console.log('UPDATEEEEEEEEEEEEEEEEEEEEEEE------------');
        //console.log('QUERYRESULTS UPDATEEEEEEEE: ', queryResult.rows);
        if (error) {
            console.error('error getting user:', error);
            response.sendStatus(500);
        }
        if (queryResult.rowCount >= 1) {
            if (!request.files){
                return response.status(400).send('No files were uploaded.');
            }
            // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
            let sampleFile = request.files.image;
            // Use the mv() method to place the file somewhere on your server
            sampleFile.mv('public/media/' + sampleFile.name, function(err) {
              if (err){
                return response.status(500).send(err);
              }
              console.log('File uploaded!');
            })
            response.redirect('/home');
        } else {
            response.send('NOT UPDATED!');
        }
      })
   }

   /**
   * ===========================================
   * Deleting profile
   * ===========================================
   */
   const deleteUser = (request, response) => {
     db.user.deleteUser(request.params, (err, queryResult)=>{
        console.log('QUERYRESULTS for DELETE!', queryResult);
        if (err) {
          console.error('error getting user:', err);
          response.sendStatus(500);
        }
        if (queryResult.rowCount >= 1) {
            if(request.cookies['userId'] != request.params.id){
                response.send('Cannot DELETE USER!')
            }
            else{
                response.clearCookie('loggedIn');
                response.clearCookie('Username');
                response.clearCookie('userId');
                response.redirect('/');
            }
        } else {
            response.send('NOT UPDATED!');
        }
     })
   }

   const uploadImage = (request, response) => {

       // User did not upload file
       if(!request.files) {
           console.log("No image was uploaded.");
           response.sendStatus(400);
       }

       const uploadedFile = request.files.image;

       uploadedFile.mv('public/media/'+ uploadedFile.name, (error) => {

           if (error) {
               console.log("fail to move file");
               response.sendStatus(500);
           }

           let path = '/media/' + uploadedFile.name;

           db.user.uploadImage(request.cookies['userId'], path, (error) => {

               if(error) {
                   console.log("error inserting path into db: ", error.message);
                   response.sendStatus(500);
               }

               response.redirect('/profile/' + request.params.id);
           });
       });
     };


  // const otherUserProfile = (request, response) => {
  //     //console.log("Rest cookies: ", request.cookies)
  //     db.user.userDisplay(request.params, (err, queryResult) => {
  //       if (err) {
  //         console.error('error getting user:', err);
  //         response.sendStatus(500);
  //       }
  //       else {
  //         console.log("QUERY RESULTS.ROWS: ", queryResult.rows);
  //         response.render('user/Index', {users: queryResult.rows, cookies:request.cookies})
  //       }
  //     })
  // }



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
    redirectHome,
    registerForm,
    createUser,
    loginForm,
    pageAfterLogin,
    loggedOut,
    userProfile,
    editProfile,
    update,
    deleteUser,
    uploadImage
  };

};