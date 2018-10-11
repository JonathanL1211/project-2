var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class Profile extends React.Component {
  render() {
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
                        <h1 className="text-primary mt-3">Post title #{this.props.res[0].id}: </h1>
                        <h3 className="mt-3">{this.props.res[0].title}</h3>
                        <p className="text-muted mt-3"> {this.props.res[0].content}</p>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
  }
}

module.exports = Profile;