var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class HomePage extends React.Component {
  render() {
    return (
        <DefaultLayout title="Create User">
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-6 offset-md-3">
                    <div className="card border-dark border rounded" >
                        <div className="card-body">
                            <form method="POST" action="/" encType="multipart/form-data">
                                <h1 className="form-heading" style={ {marginTop: '20px'} }>New user</h1>
                                <div className="register form-group">
                                    Name: <input name="name" className="form-control" type="text" required/>
                                </div>
                                <br/>
                                <div className="register form-group">
                                    Password: <input name="password" className="form-control" type="password" required/>
                                </div>
                                <br/>
                                <div className="register form-group">
                                    Contact Number: <input name="contact" className="form-control" type="text" required/>
                                </div>
                                <br/>
                                <div className="register form-group">
                                    Profile Pic: <input name="image" className="form-control" type="file" />
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
            </div>
        </div>

        </DefaultLayout>
    );
  }
}

module.exports = HomePage;