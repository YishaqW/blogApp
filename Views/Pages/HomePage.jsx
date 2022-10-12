const React = require('react')

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                </head>
                <h1>Welcome to my Blog App</h1>
                <a href="../blog/">Blogs</a>
            </div>
        )
    }
}

module.exports = HomePage

