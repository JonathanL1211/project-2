var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class HomePage extends React.Component {
  render() {
    return (
        <DefaultLayout title="Home">
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <a class="navbar-brand" href="#">BookExchange</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/new">Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container-fluid" style={ {marginTop: '20px'}, {color: 'red'} } >
                <p> BookExchange is a place for readers to connect and read varieties of book through one-for-one exchange </p>
            </div>

            <div className="row">
                <div className="col-md-4 offset-md-4">
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