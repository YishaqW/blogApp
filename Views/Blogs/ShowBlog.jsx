const React = require('react')
const Navbar = require('../components/Navbar')

class ShowBlog extends React.Component {
    render(){
        const {blogs} = this.props
        return(
            <div>
              <Navbar />
                <h1>{blogs.title}</h1>

                <p>{blogs.body}</p>
                <h6>Liked by {blogs.likes}</h6>

                <h5>Written by: {blogs.author}</h5>

                <a href={`/blog/${blogs._id}/edit`}><button>Edit</button></a>
            </div>
        )
    }
}

module.exports = ShowBlog