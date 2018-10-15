var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class NewPostForm extends React.Component {
  render() {
    return (
        <DefaultLayout title="New post">
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-8 offset-md-2">
                    <div className="card border-dark border rounded" >
                        <div className="card-body">
                            <form method="POST" action="/posts" id="newPostForm" encType="multipart/form-data">
                                <h1 className="form-heading" style={ {marginTop: '20px'} }>New book post</h1>
                                <div className="newPost form-group">
                                    Title: <input name="title" className="form-control" type="text" required/>
                                </div>
                                <br/>
                                <div className="newPost form-group">
                                    Book Picture: <input name="postimage" className="form-control" type="file" />
                                </div>
                                <br/>
                                <div className="newPost form-group">
                                    Content: (Write a short summary of your feelings when reading this book) <textarea name="content" form="newPostForm" className="form-control" rows="4"></textarea>
                                </div>
                                <br/>
                                <input name="submit" className="btn btn-primary" type="submit" value="Post" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </DefaultLayout>
    );
  }
}

module.exports = NewPostForm;