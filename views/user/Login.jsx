var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class HomePage extends React.Component {
  render() {
    return (
        <DefaultLayout title="Login">
            <div className="container">
            <div className="row mt-4">
                <div className="col-md-4 offset-md-4">
                    <div className="card border-dark border rounded" >
                        <div className="card-body">
                            <form method="POST" action="/loginData">
                                <h1 className="form-heading" style={ {marginTop: '20px'} }>Login</h1>
                                <p>Please enter your username and password</p>
                                <div className="login form-group">
                                    Name: <input name="name" className="form-control" type="text" required/>
                                </div>
                                <br/>
                                <div className="login form-group">
                                    Password: <input name="password" className="form-control" type="password" required />
                                </div>
                                <div className="forget">
                                    <a href="/#">Forget Password?</a>
                                </div>
                                <br/>
                                <input name="submit" className="btn btn-primary"type="submit" />
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

module.exports = HomePage;