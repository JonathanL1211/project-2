var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class HomePage extends React.Component {
  render() {
    // console.log("-------------------------------------------HOMEEEEEEEEEEE");
    // console.log("this.props in HOME: ", this.props.res);
    var style = {
        color: 'white',
        fontSize: '30px',
        marginTop: '20px'
    }

    let userId = this.props.cookie['userId'];
    let hrefUrl = "/profile/" + userId;

    let mapLatestPost = this.props.res.map(post => {
        return (
            <div>
                <h3>{post.title}</h3>
                <p className="text-truncate">{post.content}</p>
                <hr/>
            </div>
            )
    })

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
                            <a className="nav-link" href={hrefUrl}>Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/logout">Log out</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container-fluid" style={style} >
                <p> BookExchange is a place for readers to connect and read varieties of book through one-for-one exchange </p>
            </div>

            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1>Latest Posts: </h1>
                    <div className="card">
                        <div className="card-block">
                            <p className="text-center">{mapLatestPost}</p>
                        </div>
                    </div>
                </div>
            </div>




        </DefaultLayout>
    );
  }
}

module.exports = HomePage;