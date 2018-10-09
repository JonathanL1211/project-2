var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class HomePage extends React.Component {
  render() {
    return (
        <DefaultLayout title="Home">
            <form method="POST" action="/">
                <h1>New user registration</h1>
                <div className="register">
                    Name: <input name="name" type="text" />
                </div>
                <br/>
                <div className="register">
                    Password: <input name="password" type="password" />
                </div>
                <br/>
                <div className="register">
                    About me: <input name="bio" type="text" />
                </div>
                <br/>
                <div className="register">
                    Contact Number: <input name="contact" type="text" />
                </div>
                <br/>
                <input name="submit" type="submit" />
            </form>
        </DefaultLayout>
    );
  }
}

module.exports = HomePage;