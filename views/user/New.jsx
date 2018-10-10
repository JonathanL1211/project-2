var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class HomePage extends React.Component {
  render() {
    return (
        <DefaultLayout title="Home">
         <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                <form method="POST" action="/">
                    <h1 className="form-heading" style={ {marginTop: '20px'} }>New user</h1>
                    <div className="register form-group">
                        Name: <input name="name" className="form-control" type="text" />
                    </div>
                    <br/>
                    <div className="register form-group">
                        Password: <input name="password" className="form-control" type="password" />
                    </div>
                    <br/>
                    <div className="register form-group">
                        Contact Number: <input name="contact" className="form-control" type="text" />
                    </div>
                    <br/>
                    <div className="register form-group">
                        About me: <input name="bio" className="form-control" type="text" />
                    </div>
                    <br/>
                    <input name="submit" className="btn btn-primary" type="submit" />
                </form>
                </div>
            </div>
          </div>

        </DefaultLayout>
    );
  }
}

module.exports = HomePage;