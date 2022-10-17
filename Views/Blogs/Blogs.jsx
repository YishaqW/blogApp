const React = require('react')
const Navbar = require('../components/Navbar')

class Blogs extends React.Component {
    render(){
        const { blogs, loggedInUser } = this.props;
        console.log(loggedInUser)
        return (
            <div>
                <Navbar/>
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
                            
                            <a href={`/blog/${blog._id}/edit`}><button>Edit</button></a>
                            <form action={`/blog/${blog._id}?_method=delete`} method='post'>
                            <input type="submit" value="Delete" />
                            </form>
                        </div>
                    ))}
                </section>
            </div>
        )
    }
}
module.exports = Blogs






