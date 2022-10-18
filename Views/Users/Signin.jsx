const React = require("react");
const Navbar = require("../components/Navbar");

class Signin extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <link rel="stylesheet" href="/CSS/app.css" />
        <h1>Sign in Page</h1>

        <form action='/user/signin' method="post">
          <fieldset>
            <legend>Signin to your account</legend>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" required/>
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" required/>
            <br />
            <br />
            <input type="submit" value="Signin" />
          </fieldset>
        </form>
      </div>
    );
  }
}

module.exports = Signin;