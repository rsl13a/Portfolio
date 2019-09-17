import React, { Component } from 'react';

// Half left, half right page
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

// Import pictures from img folder
import Pictures from '../img/profile3.jpg';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                {/* Creating Half Left | Half Right */}
                <Grid className="contact-grid">
                    {/* Half left */}
                    <Cell col={6}>
                        <h2>
                            Leong Ren Shi (Dominic)
                        </h2>
                        <img
                            src={Pictures}
                            alt="avatar"
                            style={{ height: '300px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            Profile picture
                        </p>
                    </Cell>

                    {/* Half right */}
                    <Cell col={6}>
                        <h2>
                            Contact me
                        </h2>

                        {/* The dotted line */}
                        <hr />

                        <div className="contact-list">
                            <List>
                                {/* Contact part  */}
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Antom' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        012-987-6327
                                    </ListItemContent>
                                </ListItem>

                                {/* Email part */}
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Antom' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        domrsl91@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                {/* Skype part */}
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Antom' }}>
                                        <i className="fab fa-skype" aria-hidden="true" />
                                        shileong
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
