var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class HomePage extends React.Component {
  render() {
    return (
        <DefaultLayout title="Home">
            <div className="container">
            <form method="POST" action="/login">
                <h1 className="form-heading">Login</h1>
                <p>Please enter your username and password</p>
                <div className="login form-group">
                    Name: <input name="name" className="form-control" type="text" />
                </div>
                <br/>
                <div className="login form-group">
                    Password: <input name="password" className="form-control" type="password" />
                </div>
                <div className="forget">
                    <a href="/#">Forget Password?</a>
                </div>
                <br/>
                <input name="submit" className="btn btn-primary"type="submit" />
            </form>
            </div>
        </DefaultLayout>
    );
  }
}

module.exports = HomePage;