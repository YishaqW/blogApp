const React = require("react");

class CreateBlog extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <link rel="stylesheet" href="/CSS/app.css" />

        <form style={styles.container} action="/blog" method="post">
          <a href="/blog"> Go back</a>

          <h3>Create a new Blog</h3>

          <input type="text" name="title" placeholder="title  " required />
          <br />

          <textarea
            name="body"
            placeholder="body"
            rows="24"
            cols="50"
            required
          />
          <br />

          {/* <input type="image" name="image" placeholder="image" src=""/><br />  */}

          <div>
            <br />
            <label>sponsored? </label>
            <input type="checkbox" name="sponsored" />
            <br />
            <br />
          </div>
          <br />
          <input type="submit" value="create blog" />
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

module.exports = CreateBlog;
