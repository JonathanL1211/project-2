var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class HomePage extends React.Component {
  render() {
    return (
        <DefaultLayout title="Home">
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <a className="navbar-brand" href="#">BookExchange</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/logout">Log out</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container-fluid" style={ {marginTop: '20px'}, {color: 'black'} } >
                <p> BookExchange is a place for readers to connect and read varieties of book through one-for-one exchange </p>
            </div>

            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1>Latest Posts: </h1>
                    <div className="card">
                        <div className="card-block">
                            <p className="text-center">This is the first post </p>
                        </div>
                    </div>
                </div>
            </div>




        </DefaultLayout>
    );
  }
}

module.exports = HomePage;