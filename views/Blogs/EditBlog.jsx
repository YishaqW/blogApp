const React = require("react");
const Navbar = require("../components/Navbar");

class EditBlog extends React.Component {
  render() {
    console.log(this.props.blog);
    const { blog } = this.props;
    return (
      <div>
         <link rel="stylesheet" href="/CSS/app.css" />
         <Navbar />
        <h1>Edit Blog</h1>

        <form action={`/blog/${blog._id}?_method=put`} method='post'>
          <label htmlFor="title">Title</label>
          <br />
          <input type="text" value={blog.title} name='title'/> <br />
          <br />

          <label htmlFor="body">Body</label>
          <br />
          <textarea
            type="text"
            value={blog.body}
            rows="24"
            cols="50"
            name='body'
          ></textarea>{" "}
          <br />
          <br />
          <label htmlFor="sponsored">Sponsored?</label>
          <input type='checkbox' name='sponsored' defaultChecked={blog.sponsored ? 'on': null}/><br />
          <br />
          <input type='submit' value='Update Blog'/>

        </form>
        
        <form action={`/blog/${blog._id}?_method=delete`} method='post'>
          <br />
            <input type='submit' value='Delete Blog' />
        </form>
      </div>
    );
  }
}

module.exports = EditBlog;