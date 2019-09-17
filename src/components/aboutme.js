import React, { Component } from 'react';

// Half left, half right page
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

// Import pictures from img folder
import Pictures from '../img/profile1.jpg';

class About extends Component {
    render() {
        return (
            <div className="contact-body">


                {/* Creating Half Left | Half Right */}
                < Grid className="contact-grid" >
                    {/* Half left */}
                    < Cell col={6} >
                        <h2>
                            Leong Ren Shi (Dominic)
                        </h2>
                        <img
                            src={Pictures}
                            alt="avatar"
                            style={{ height: '450px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            Studied in Texas for 3 years majoring in IT and minor in Business.
                            Worked in WeDo Technology for 1 year and mainly in charge of database.
                            Did not think it was the right path for me. Studied in NEXT academy for 10 weeks and it teaches programming.
                            After few weeks of course, I found out I enjoyed doing Front End and have been working on my skills.
                            Created a fitness app in 2 weeks and I am in charge of the front end for my group.

                        </p>
                    </ Cell>

                    {/* Half right */}
                    < Cell col={6} >
                        <h2>
                            About me
                        </h2>

                        {/* The dotted line */}
                        <hr />

                        <div className="contact-list">

                            <div className="pic-body">
                                {/* Creating a card section */}
                                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(https://unitedfsi.com/wp-content/uploads/2018/10/Sporting-Goods-800x744.jpg) center / cover', margin: 'auto' }}>
                                    <CardTitle expand />
                                    <CardActions style={{ height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
                                        <span style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>
                                            Sporty

                                    </span>
                                    </CardActions>
                                </Card>

                                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(https://www.visitsingapore.com/singapore-itineraries/3-day-itinerary-for-the-intrepid-foodie/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg) center / cover', margin: 'auto' }}>
                                    <CardTitle expand />
                                    <CardActions style={{ height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
                                        <span style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>
                                            Foodie
                                    </span>
                                    </CardActions>
                                </Card>
                            </div>
                            <div className="pic-body">
                                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(https://cdn2.tstatic.net/tribunnews/foto/bank/images/traveling-abroad-pelesiran-luar-negeri-destinasi-wisata-tourism-destination_20141117_201647.jpg) center / cover', margin: 'auto' }}>
                                    <CardTitle expand />
                                    <CardActions style={{ height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
                                        <span style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>
                                            Traveling
                                    </span>
                                    </CardActions>
                                </Card>

                                <Card shadow={0} style={{ width: '256px', height: '256px', background: 'url(https://st3.depositphotos.com/3591429/12985/i/950/depositphotos_129852320-stock-photo-business-people-talking-on-party.jpg) center / cover', margin: 'auto' }}>
                                    <CardTitle expand />
                                    <CardActions style={{ height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
                                        <span style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>
                                            Socializing
                                    </span>
                                    </CardActions>
                                </Card>
                            </div >
                        </div>

                    </Cell >
                </Grid >
            </div >
        );
    }
}

export default About;
