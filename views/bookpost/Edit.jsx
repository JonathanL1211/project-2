var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class EditPage extends React.Component {
  render() {
    // console.log('-----------------------------------');
    // console.log('EDIITTTTTTTTT THIS.PROPSSSSSSS: ',this.props.res);
    let postId= this.props.res[0].id;
    let actionUrl = '/post/' + postId + '/?_method=PUT';
    let defaultInputValue = {
        title: this.props.res[0].title,
        content: this.props.res[0].content,
        userId: this.props.res[0].user_id
    };
    return (
        <DefaultLayout title="Edit Post">
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-8 offset-md-2">
                    <div className="card border-dark border rounded" >
                        <div className="card-body">
                            <form method="POST" action={actionUrl} id="newPostForm">
                                <h1 className="form-heading" style={ {marginTop: '20px'} }>Edit book post</h1>
                                <div className="newPost form-group">
                                    Title: <input name="title" className="form-control" type="text" value={defaultInputValue.title} required/>
                                </div>
                                <br/>
                                <div className="newPost form-group">
                                    Book Picture: <input name="postimage" className="form-control" type="file" />
                                </div>
                                <br/>
                                <div className="newPost form-group">
                                    Content: (Write a short summary of your feelings when reading this book) <textarea name="content" form="newPostForm" value={defaultInputValue.content}className="form-control" rows="4"></textarea>
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

module.exports = EditPage;