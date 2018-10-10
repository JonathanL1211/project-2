var React = require("react");
//var DefaultLayout = require('../layout/Default');
class DefaultLayout extends React.Component {
  render() {
    // <link rel="stylesheet" type="text/css" href="/style.css"></link>
    return (
        <html>
        <head>
            <title>{this.props.title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></link>
            <link rel="stylesheet" type="text/css" href="css/styles.css"></link>
        </head>
        <body>
            <div className="fluid-container">
                {this.props.children}
            </div>
        </body>
        </html>
    );
  }
}

module.exports = DefaultLayout;