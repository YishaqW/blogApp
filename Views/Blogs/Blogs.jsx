const React = require('react')
const Navbar = require('../components/Navbar')

class Blogs extends React.Component {
    render(){
        const { blogs } = this.props;
        return (
            <div>
                <Navbar />
                <head>
                    <link rel="stylesheet" href="/CSS/app.css" />
                </head>
                <h1>Blogs</h1>

                <section>
                    {blogs.map((blog) => (
                        <div>
                            <a href={`/blog/${blog._id}`}>
                            {" "}
                            <h2>{blog.title}</h2>
                            </a>
                            <div>
                                <p>{blog.body}</p>
                            </div>
                            <h6>Written by: {blog.author}</h6>
                        </div>
                    ))}
                </section>
            </div>
        )
    }
}
module.exports = Blogs






