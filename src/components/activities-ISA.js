import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class ActivitiesISA extends Component {
    render() {
        return (
            <Grid>
                {/* Left side of the right page */}
                <Cell col={4}>
                    <p>
                        {this.props.startYear} {this.props.endYear}
                    </p>
                    <img src="https://pbs.twimg.com/profile_images/378800000826335812/c98043e50913bc4a7a4f98bfd628f318_400x400.jpeg" style={{ height: '250px' }}></img>
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
                        <li><b>Actively contributed in the events organized by ISA which includes performances and welcoming new international students</b></li>

                    </p>
                </Cell>
            </Grid>
        )
    }
}

export default ActivitiesISA;