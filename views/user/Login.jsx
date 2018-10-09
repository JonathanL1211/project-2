var React = require("react");
var DefaultLayout = require('../layout/DefaultLayout');
class HomePage extends React.Component {
  render() {
    return (
        <DefaultLayout title="Home">
            <form method="POST" action="/login">
                <h1>Login</h1>
                <div className="login">
                    Name: <input name="name" type="text" />
                </div>
                <br/>
                <div className="login">
                    Password: <input name="password" type="password" />
                </div>
                <br/>
                <input name="submit" type="submit" />
            </form>
        </DefaultLayout>
    );
  }
}

module.exports = HomePage;