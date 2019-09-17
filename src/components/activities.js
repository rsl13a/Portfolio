import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

// Import pictures from img file
import Pictures from '../img/www.jpg';

class Activities extends Component {
    render() {
        return (
            <Grid>
                {/* Left side of the right page */}
                <Cell col={4}>
                    <p>
                        {this.props.startYear} {this.props.endYear}
                    </p>
                    <img src={Pictures} style={{ height: '250px' }}></img>
                </Cell>

                {/* Right side of the right page */}
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>
                        {this.props.ActivityName}
                    </h4>
                    <p>
                        {this.props.ActivityDescription}
                    </p>
                    <p>
                        <li><b>An extended orientation experience that is designed to prepare students for their transition to Abilene Christian University</b></li>
                        <li><b>Welcomed and provide support for new students into the campus community</b></li>
                        <li><b>In charged of international students as well by helping them with English throughout the welcome week</b></li>
                    </p>
                </Cell>
            </Grid>
        )
    }
}

export default Activities;