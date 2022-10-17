const React = require('react')
const Navbar = require('../components/Navbar')

class New extends React.Component {
  render() {
    return (
      <body>
      <div style={{display: 'flex', justifyContent: "center"}}>
        <form action="/blog" method='post'>
        <h1> What's Up? </h1>

          Tweet: <textarea type="textarea" name="body" rows="25"
          cols="25"required maxLength={333} /><br />

          {/* Author: <input type="text" name="author" /><br /> */}

          Title: <input type="text" name="title" /><br />

          <input type="submit" value="Let it out" />

        </form>

      </div>

    </body>
    );
  }
}

module.exports = New
