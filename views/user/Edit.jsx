var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class EditPage extends React.Component {
  render() {
    console.log('EDIITTTTTTTTT: ',this.props.results);
    let userId= this.props.results[0].id;
    let actionUrl = '/profile/' + userId + '/?_method=PUT';
    let defaultInputValue = {
        name: this.props.results[0].name,
        contact: this.props.results[0].phonenumber,
        bio: this.props.results[0].bio
    };
    return (
        <DefaultLayout title="Home">
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-4 offset-md-4">
                    <div className="card border-dark border rounded" >
                        <div className="card-body">
                            <form method="POST" action={actionUrl}>
                                <h1 className="form-heading" style={ {marginTop: '20px'} }>Edit Profile</h1>
                                <div className="register form-group">
                                    Name: <input name="name" className="form-control" type="text" value={defaultInputValue.name}required/>
                                </div>
                                <br/>
                                <div className="register form-group">
                                    Password: <input name="password" className="form-control" type="password" required/>
                                </div>
                                <br/>
                                <div className="register form-group">
                                    Contact Number: <input name="contact" className="form-control" type="text" value={defaultInputValue.contact}required/>
                                </div>
                                <br/>
                                <div className="register form-group">
                                    Profile Pic: <input name="image" className="form-control" type="file" />
                                </div>
                                <br/>
                                <div className="register form-group">
                                    About me: <input name="bio" className="form-control" type="text" value={defaultInputValue.bio} />
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

module.exports = EditPage;