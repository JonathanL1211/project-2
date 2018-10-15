var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class Profile extends React.Component {
  render() {
    let editUrl = '/post/' + this.props.res[0].id + '/edit';
    let commentUrl = '/post/' + this.props.res[0].id + '/comment';
    let deleteUrl = '/post/' + this.props.res[0].id + '/delete';
    // let commentUserUrl = '/profile/' + this.props.post[0].user_id;
    console.log("INDEXXXXXXXXXXX BOOOOKKKK-----------------------------------------");
    console.log("this.props in INDEX BOOKPOST!: ", this.props);
    var imageLink = this.props.res[0].postimage;

    var mapComment = this.props.comment.map((post)=>{
        return <div> &nbsp; </div> //$nbsp; space!
    })
    if (this.props.comment.length > 0){

        var mapComment = this.props.comment.map((post)=>{
            var commentUserUrl = '/profile/' + post.user_id;
            return (
                <div>
                    <h3>{post.commentcontents} <span><small><a href={commentUserUrl}>{post.user_id}</a></small></span></h3>
                    <hr/>
                </div>
                )
        })
    }
    return (
        <DefaultLayout title="Post detail">
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <a className="navbar-brand" href="/home">BookExchange</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/logout">Log out</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <h1 className="text-primary mt-3">Post title: <span className="text-info">{this.props.res[0].title}</span></h1>
                        <img width="200px" height="300px" src={imageLink}/>
                        <p className="text-muted mt-3"> {this.props.res[0].content}</p>
                    </div>
                </div>
                <div className="row edit">
                    <div className="col-md-10 offset-md-1">
                        <a href={editUrl}><input className="btn btn-primary" type="button" value="Edit"/></a>
                        <a href={deleteUrl}><input className="btn btn-primary ml-2" type="button" value="Delete"/></a>
                    </div>
                </div>

                <div className="row displayingComments">
                    <div className="col-md-10 offset-md-1 mt-5 text-muted">
                        {mapComment}
                    </div>
                </div>


                <div className="row comments">
                    <div className="col-md-10 offset-md-1">
                        <h1 className="text-danger">Comments: </h1>
                        <form method="POST" action={commentUrl}>
                            <textarea name="commentContent" className="form-control" rows="4"></textarea>
                            <br/>
                            <input name="submit" className="btn btn-primary" type="submit" value="Post Comment" />
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
  }
}

module.exports = Profile;