const React = require("react");
const NavBar = require('../components/Navbar')

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css" />
        </head>

        <NavBar />

        <section>
          <h1 class="welcomeText">Y'Blog App</h1>

          <img src="images/blog.png.webp" style={styles.headerImg} />

          <p>Free space, open thought, clear mind </p>
          <p>Made to help express ideas and ease stresses.</p>
          <p>Welcome to Y'Blog!</p>
        </section>

        <section className="margin-section">
          <h1>Bio</h1>
          <div style={styles.intro}>
            <img src="/images/me.png.jpeg" style={styles.me} />
            <div>
              <h2>Developer</h2>
              <p>
              Junior Software Engineer with hands-on technical training in HTML, MongoDB, Node.js, React, and many more. Currently completing 450+ hours of hands-on technical instruction in an agile environment, encompassing the software development life cycle. Actively seeking to be a contributing member of a software engineering team. Strong background in customer service.
              </p>
            </div>
          </div>
        </section>

        <section className="margin-section">
          <div>
            <h1>Feature Blog</h1>
            <div>
              <h3>Intro to JS</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                nisi maiores nulla saepe, dolore ex atque assumenda obcaecati
                consequuntur quo possimus maxime exercitationem tempore error
                architecto. Dolorem consequuntur cumque unde! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Culpa nisi maiores nulla
                saepe, dolore ex atque assumenda obcaecati consequuntur quo
                possimus maxime exercitationem tempore error architecto. Dolorem
                consequuntur cumque unde!
              </p>
              <span>Author: Bill</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const styles = {
  headerImg: { width: "100%", height: "300px", objectFit: "fill" },
  me: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "fill",
    marginRight: "5px",
  },
  intro: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
  },
};

module.exports = HomePage;
