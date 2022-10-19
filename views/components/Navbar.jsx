const React = require('react')


class Navbar extends React.Component {
    render() {
        return(
            <nav style={styles.container}>
                <a href='/'>Home</a>
                <a href='/blog'>Blogs</a>
                <a href='/blog/new'>Create New Blog</a>
                <a href='/user/signup'>Signin/up</a>
                <a href='/user/signout'>Signout</a>
                {/* { loggedInUser && <h6>{loggedInUser}</h6>}
                { loggedInUser && <a href=''>{loggedInUser}</a>} */}

            </nav>
        )
    }
}

const styles = {
    container : {
        display:"flex",
        justifyContent: 'space-evenly',
        background: 'rgba(0, 55, 99, 0.9)'
    }
}


module.exports = Navbar