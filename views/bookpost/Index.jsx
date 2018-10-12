var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class Profile extends React.Component {
  render() {
    let editUrl = '/post/' + this.props.res[0].id + '/edit';
    // console.log("INDEXXXXXXXXXXX BOOOOKKKK-----------------------------------------");
    // console.log("this.props in INDEX BOOKPOST!: ", this.props);
    return (
        <DefaultLayout title="Home">
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
                        <p className="text-muted mt-3"> {this.props.res[0].content}</p>
                    </div>
                </div>
                <div className="row edit">
                    <div className="col-md-10 offset-md-1">
                        <a href={editUrl}><input className="btn btn-primary" type="button" value="Edit"/></a>
                        <a href='#'><input className="btn btn-primary ml-2" type="button" value="Delete"/></a>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
  }
}

module.exports = Profile;