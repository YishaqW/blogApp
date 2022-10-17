const React = require('react')
const Navbar = require('../components/Navbar')

class Edit extends React.Component{
  render(){
      const { blog } = this.props
      return(
          <div>
              <head>
              <link rel="stylesheet" href="/CSS/app.css"/>    
              </head>
              <Navbar/> 
              <h1>Edit</h1>
              <form action={`/blog/${blog._id}?_method=PUT`} method='POST'>
                   title: <input type='text' name='title' defaultValue={blog.title}/> 
                   <br />    
                   author: <input type='text' name='author' defaultValue={blog.author}/>
                   <br />        
                   body: <textarea name="body" rows="4" cols="50" defaultValue={blog.body}/>
                   <br />
                   <input type='submit' value='Edit Post'/>
                   <form action={`/blog/${blog._id}?_method=delete`} method='post'>
                            <input type="submit" value="Delete" />
                            </form>
              </form>
          </div>
      )
  }
}


module.exports = Edit










module.exports = Edit