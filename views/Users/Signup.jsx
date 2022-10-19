const React = require("react");
const Navbar = require("../components/Navbar");

class Signup extends React.Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="/CSS/app.css" />
        <Navbar />
        <h1>Create an new account</h1>

        <form action='/user/signup' method='post'>
          <fieldset>
            <legend>Create an account</legend>
            <br />
            <label htmlFor="username">Username</label>
            <br />
            <br />
            <input type="text" name="username" required />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" required />
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="text" name="password" required />
            <br />
            <br />
            <input type="submit" value="Signup" />
          </fieldset>
        </form>

        <div>
          <p>
            Already have an Account? <a href="/user/signin">Signin</a>{" "}
          </p>
        </div>
      </div>
    );
  }
}

module.exports = Signup;