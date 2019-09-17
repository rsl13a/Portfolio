import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class ExperienceWeDo extends Component {
    render() {
        return (
            <Grid>
                {/* Left side of the right page */}
                <Cell col={4}>
                    <p>
                        {this.props.startYear} - {this.props.endYear}
                    </p>
                    <img src="https://media.licdn.com/dms/image/C560BAQGaIKowAtwo5Q/company-logo_200_200/0?e=2159024400&v=beta&t=RfKSZnNTPA1VkTUf5BvGbSZboVyVtETiDLnsTnx7KeY"></img>
                </Cell>

                {/* Right side of the right page */}
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>
                        {this.props.JobName}
                    </h4>
                    <p>
                        {this.props.JobDescription}
                    </p>
                    <p>
                        <li><b>Assigned as a Junior Consultant at Digi Telecommunications Sdn Bhd</b></li>
                        <li><b>Responsible for monitoring technical data within the internal operational system for errors and provided solutions accordingly</b></li>
                        <li><b>Used SQL to compare and collect data of customers within Digi's database to ensure accurate information</b></li>
                        <li><b>Negotiated agreements between employees of different teams to clarify misunderstood directions and resolve conflicts affecting performance</b></li>
                    </p>
                </Cell>
            </Grid >
        )
    }
}

export default ExperienceWeDo;