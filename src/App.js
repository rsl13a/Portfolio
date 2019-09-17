import React, { Component } from 'react';
import './App.css';

// Import from npm install --save react-mdl
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

// Import Main for routing
import Main from './components/main';

// Import Link for linkage
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          {/* Colorful grid with a link that links to the main page*/}
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">MyPortfolio</Link>} scroll>

            {/* Top row links*/}
            <Navigation>
              {/* Top row links using their js file*/}
              <Link to="/aboutme">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>

          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">MyPortfolio</Link>}>
            {/* Side column links with a link that links to the main page*/}
            <Navigation>
              {/* Side column links using their js file*/}
              <Link to="/aboutme">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />

            {/* For routing */}
            <Main />

          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
