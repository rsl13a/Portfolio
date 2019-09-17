import React, { Component } from 'react';

import { Grid, Cell } from 'react-mdl';

// Import Education from education.js
import Education from './education';

// Import Education from education.js
import EducationKDU from './education-KDU';

// Import Experience from experience.js
import ExperienceWeDo from './experience-wedo';

// Import Experience from experience.js
import ExperienceOpensys from './experience-opensys';

// Import Activity from activity.js
import Activity from './activities';

// Import Activity from activity.js
import ActivityISA from './activities-ISA';

// Import Skills from skills.js
import Skills from './skills';

// Import pictures from img folder
import Pictures from '../img/profile2.jpg';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    {/* Left side of the page */}
                    <Cell className="resume-left-col" col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={Pictures}
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ textAlign: 'center' }}>
                            Leong Ren Shi
                        </h2>
                        <h4 style={{ color: 'grey' }}>
                            Front-End Programmer
                        </h4>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '90%' }} />

                        <p>
                            <li><b>Majored in Information Technology</b></li>
                            <li><b>Created a workable fitness Application in 2 weeks</b></li>
                            <li><b>Works well in a team, as well as individually with minimum supervision</b></li>
                            <li><b>Fast learner with great attention to details</b></li>
                        </p>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '90%' }} />

                        <h4 style={{ color: 'grey' }}>
                            Address
                        </h4>
                        <i className="fa fa-address-card" aria-hidden="true" style={{ color: "black", fontSize: '20px' }}> <a href="https://www.google.com.my/maps/place/21,+Jalan+SS+2%2F95,+SS+2,+47300+Petaling+Jaya,+Selangor/@3.1236667,101.6229215,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc494fc67554c1:0x3d024dc5548ef1db!8m2!3d3.1236667!4d101.6251102" target="_blank" > No.21, Jalan ss2/95 47300 Petaling Jaya Selangor</a></i>

                        <h4 style={{ color: 'grey' }}>
                            Phone
                        </h4>
                        <i className="fa fa-phone-square" aria-hidden="true" style={{ color: "black", fontSize: '20px' }}> 012-987-6327</i>

                        <h4 style={{ color: 'grey' }}>
                            Email
                        </h4>
                        <i className="fa fa-envelope" aria-hidden="true" style={{ color: "black", fontSize: '20px' }}> domrsl91@gmail.com</i>

                        <h4 style={{ color: 'grey' }}>
                            Website
                        </h4>
                        <i className="fab fa-github-square" aria-hidden="true" style={{ color: "black", fontSize: '20px' }}> <a href="https://github.com/rsl13a" target="_blank">rsl13a</a></i>
                        <br></br>
                        <i className="fas fa-portrait" aria-hidden="true" style={{ color: "black", fontSize: '20px' }}> <a href="https://dom-portfolio.netlify.com" target="_blank">portfolio</a></i>

                        <h4 style={{ color: 'grey' }}>
                            Social Media
                        </h4>
                        <i className="fab fa-facebook" aria-hidden="true" style={{ color: "black", fontSize: '20px' }}> <a href="https://www.facebook.com/dominic.renshi" target="_blank">Dominic Leong Ren Shi</a></i>
                        <br></br>
                        <i className="fab fa-instagram" aria-hidden="true" style={{ color: "black", fontSize: '20px' }}> <a href="https://www.instagram.com/dominiclrs91/?hl=en" target="_blank">dominiclrs91</a></i>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '90%' }} />
                    </Cell>

                    {/* Right side of the page */}
                    <Cell className="resume-right-col" col={8}>

                        {/* Experience part */}
                        <h2>
                            Experience
                        </h2>

                        {/* From and for Experience.js for Wedo */}
                        <ExperienceWeDo
                            startYear='Jan 2018'
                            endYear='Jan 2019'
                            JobName="WeDo Technology"
                            JobDescription="Junior Consultant 1"
                        />

                        {/* From and for Experience.js for Opensys */}
                        <ExperienceOpensys
                            startYear='June 2016'
                            endYear='Aug 2016'
                            JobName="Opensys"
                            JobDescription="Internship"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        {/* Education part */}
                        <h2>
                            Education
                        </h2>

                        {/* From and for Education.js for ACU */}
                        <Education
                            startYear='Aug 2013'
                            endYear='Dec 2016'
                            schoolName="Abilene Christian University"
                            schoolDescription="Degree: Major in Infomation Technology, Minor in Business Administration"

                        />

                        {/* From and for Education.js for KDU */}
                        <EducationKDU
                            startYear='Jan 2009'
                            endYear='Jan 2011'
                            schoolName="KDU College"
                            schoolDescription="Diploma: Business Administration"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />


                        {/* Activity part */}
                        <h2>
                            Activities
                        </h2>

                        {/* From and for Activity.js for ACU */}
                        <Activity
                            startYear=""
                            endYear=""
                            ActivityName="Wildcat Week Leader (ACU)"
                            ActivityDescription="ACU mentor"
                        />

                        {/* From and for Activity.js for ACU */}
                        <ActivityISA
                            startYear=""
                            endYear=""
                            ActivityName="International Student Association (ISA)"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        {/* Programming Skills part */}
                        <h2>
                            Programming Skills
                        </h2>

                        {/* The % of programming skills */}
                        <Skills
                            skill="ReactJs"
                            progress={70}
                        />
                        <Skills
                            skill="MySQL"
                            progress={65}
                        />
                        <Skills
                            skill="Python"
                            progress={50}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={50}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={30}
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        {/* Social Skills part */}
                        <h2>
                            Social Skills
                        </h2>

                        {/* The % of social skills */}
                        <Skills
                            skill="Program leadership"
                            progress={75}
                        />
                        <Skills
                            skill="Staff Supervisions"
                            progress={75}
                        />
                        <Skills
                            skill="Presentation Design"
                            progress={75}
                        />
                        <Skills
                            skill="Event Coordination"
                            progress={50}
                        />
                    </Cell>
                </Grid>
            </div >
        );
    }
}

export default Resume;
