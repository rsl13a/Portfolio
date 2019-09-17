import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class ExperienceOpensys extends Component {
    render() {
        return (
            <Grid>
                {/* Left side of the right page */}
                <Cell col={4}>
                    <p>
                        {this.props.startYear} - {this.props.endYear}
                    </p>
                    <img src="https://s3-ap-southeast-1.amazonaws.com/isaham/stocks/OPENSYS.png"></img>
                </Cell>

                {/* Right side of the right page */}
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>
                        {this.props.JobName}
                    </h4>
                    <p>
                        {this.props.JobDescription}
                    </p>
                    <p >
                        <li><b>Created a remote authentication dial-in-user service (RADIUS) for the company's private and guest server</b></li>
                        <li><b>Installed, configured and managed Vmware vSphere, a cloud computing virtualization platform</b></li>
                        <li><b>Experienced in troubleshooting and data port management</b></li>
                    </p>
                </Cell>
            </Grid>
        )
    }
}

export default ExperienceOpensys;