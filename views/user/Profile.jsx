var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class Profile extends React.Component {
  render() {
    //console.log("HOMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    //console.log("this.props in HOME: ", this.props);
    let editUrl = '/profile/' + this.props.res[0].id +'/edit';
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

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 mt-3">
                        <div className="card border-dark border rounded" >
                            <div className="card-body">
                                <h1 className="card-title text-info">Profile Details</h1>
                                <h3 className="card-subtitle mb-2 text-muted">Profile information</h3>
                                <p> Name: {this.props.res[0].name} </p>
                                <p> Biography: {this.props.res[0].bio} </p>
                                <p> Contact: {this.props.res[0].phonenumber} </p>
                                <a href={editUrl}><input className="btn btn-primary" type="button" value="edit"/></a>
                                <a href='#'><input className="btn btn-primary ml-2" type="button" value="delete"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 mt-3">
                        <div className="card border-dark border rounded" >
                            <div className="card-body">
                                <h1 className="text-info">Blog post here</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
  }
}

module.exports = Profile;