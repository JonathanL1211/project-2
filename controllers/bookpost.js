var sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logics
   * ===========================================
   */
   const newPostForm = (request, response) => {
      response.render('bookpost/new');
   }

   const createPost = (request, response) => {
      let path = '/media/';
      db.bookpost.createPost(request.body, request.cookies, request.files.postimage, path, (error, queryResult) => {
        console.log("request.file for createPOST-----------------", request.files.postimage)
        console.log("request.body for CREATEPOST-------------------------------: ", request.body);
        console.log('QUERYRESULTS NEW POST -----------------**********------: ', queryResult.rows);
        if (error) {
            console.error('error getting user:', error);
            response.sendStatus(500);
        }
        if (queryResult.rowCount >= 1) {
            console.log('Created post successfully!');
            if (!request.files){
                return response.status(400).send('No files were uploaded.');
            }
            // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
            let sampleFile = request.files.postimage;
            // Use the mv() method to place the file somewhere on your server
            sampleFile.mv('public/media/' + sampleFile.name, function(err) {
                if (err){
                  return response.status(500).send(err);
                }
                console.log('File uploaded!');
            })
        }
          //if (request.body)
            //response.cookie('username', request.body.name);
        else {
            console.log('Post not created!');
        }
        //response.cookie('postId', queryResult.rows[0].id);
        // redirect to home page after creation
        response.redirect('/profile/' + request.cookies['userId']);

      })
  }

  const displayPostPage = (request, response) =>{
      db.bookpost.getPostInfo(request.params, (err, firstqueryResult, secondqueryResult)=>{
          if (err) {
            console.error('error getting user:', err);
            response.sendStatus(500);
          }
          else {
            console.log("displayyy----------------------:", firstqueryResult);
            console.log("displayyy 2nd----------------------:", secondqueryResult);
            response.render('bookpost/Index', {res: firstqueryResult.rows, comment: secondqueryResult.rows});
          }
      })
  };

  const editPostPage = (request, response) => {
      db.bookpost.getPostInfo(request.params, (err, queryResult) => {
        if (err) {
          console.error('error getting user:', err);
          response.sendStatus(500);
        }
        if(queryResult.rows[0].user_id != request.cookies['userId']){
          response.send('CANNOT EDIT POSTS FROM OTHER USERS!');
        }
        else {
          console.log("edittt formrmmmmmmmmmm----------------------:", queryResult.rows);
          response.render('bookpost/Edit', {res:queryResult.rows});
        }
      })
  }

  const update = (request, response) => {
      let path = '/media/';
      db.bookpost.updatePost(request.body, request.params, request.files.postimage, path, (err, queryResult) => {
        if (err) {
          console.error('error getting user:', err);
          response.sendStatus(500);
        }
        if (queryResult.rowCount >= 1) {
            if (!request.files){
                return response.status(400).send('No files were uploaded.');
            }
            // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
            let sampleFile = request.files.postimage;
            // Use the mv() method to place the file somewhere on your server
            sampleFile.mv('public/media/' + sampleFile.name, function(err) {
              if (err){
                return response.status(500).send(err);
              }
              console.log('File uploaded!');
            })
            response.redirect('/post/' + request.params.id);
        } else {
            response.send('NOT UPDATED!');
        }
      })
  }

  const deletePost = (request, response) => {
     db.bookpost.deletePost(request.params, (err, queryResult)=>{
        console.log('QUERYRESULTS for DELETE!', queryResult);
        if (err) {
          console.error('error getting user:', err);
          response.sendStatus(500);
        }
        if (queryResult.rowCount >= 1) {
            response.redirect('/home');
        } else {
            response.send('NOT DELETED!!');
        }
     })
  }


  return{
      newPostForm,
      createPost,
      displayPostPage,
      editPostPage,
      update,
      deletePost
  };

};