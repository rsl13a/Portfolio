import React, { Component } from 'react';

// Import for colorful Grid
import { Grid, Cell } from 'react-mdl';

// Import pictures from img folder
import Pictures from '../img/profile4.jpg';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                {/* creating colorful Grid */}
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/* creating img */}
                        <img
                            src={Pictures}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Front end developer</h1>

                            <hr />

                            <p>HTML/CSS | JavaScript | Bootstrap | React | MySQL | Python | Flask</p>

                            {/* Social media links */}
                            <div className="social-links">

                                {/* Links and open it on new tab (_blank) - Linkedin*/}
                                <a href="https://www.linkedin.com/in/ren-shi-leong-b18a8791/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                {/* Links and open it on new tab (_blank) - Github*/}
                                <a href="https://github.com/rsl13a" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Links and open it on new tab (_blank) - Github*/}
                                <a href="https://dom-portfolio.netlify.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fas fa-portrait" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;
