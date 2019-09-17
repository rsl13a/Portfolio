import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class EducationKDU extends Component {
    render() {
        return (
            <Grid>
                {/* Left side of the right page */}
                <Cell col={4}>
                    <p>
                        {this.props.startYear} - {this.props.endYear}
                    </p>
                    <img src="https://eduadvisor.my/wp-content/uploads/2015/07/Logo-KDU-University-College-200.png"></img>
                </Cell>

                {/* Right side of the right page */}
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>
                        {this.props.schoolName}
                    </h4>
                    <p>
                        {this.props.schoolDescription}
                    </p>

                </Cell>
            </Grid>
        )
    }
}

export default EducationKDU;