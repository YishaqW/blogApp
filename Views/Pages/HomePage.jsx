const React = require('react')
const Navbar = require('../components/Navbar')

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <head>
                <link rel="stylesheet" href="/CSS/app.css" />
                </head>

                <Navbar />

                
              
                <h1>Welcome to my Blog App</h1>
                <a href="../blog/">Blogs</a>
            </div>
        )
    }
}

module.exports = HomePage

