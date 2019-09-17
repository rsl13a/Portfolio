import React, { Component } from 'react';

// To have multiple selections of Projects
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    // inside selections of project, can render between projects (HTML/CSS | React)
    // If its the first tab = HTML/CSS
    // If its the second tab = React
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-grid">
                    {/* Creating card section Project #1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://skywell.software/wp-content/uploads/2019/01/javascript-vs-html-vs-css-1024x683.jpg) center/cover' }}>
                            #1 Hangman
                    </CardTitle>
                        <CardText>
                            Some text in the card
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/rsl13a/hangman" target="_blank">Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Creating card section Project #2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://skywell.software/wp-content/uploads/2019/01/javascript-vs-html-vs-css-1024x683.jpg) center/cover' }}>
                            #2 Illusive Button
                    </CardTitle>
                        <CardText>
                            Some text in the card
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/rsl13a/illusiveButton" target="_blank">Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Creating card section Project #3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://skywell.software/wp-content/uploads/2019/01/javascript-vs-html-vs-css-1024x683.jpg) center/cover' }}>
                            #3 Resume
                    </CardTitle>
                        <CardText>
                            Some text in the card
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/rsl13a/resume" target="_blank">Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Creating card section Project #4 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://skywell.software/wp-content/uploads/2019/01/javascript-vs-html-vs-css-1024x683.jpg) center/cover' }}>
                            #4 Random Website
                    </CardTitle>
                        <CardText>
                            Some text in the card
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/rsl13a/webpage" target="_blank">Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="project-grid">
                    {/* Creating card section Project #1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center/cover' }}>
                            #1 Front Page Webpage
                    </CardTitle>
                        <CardText>
                            Some text in the card
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/rsl13a/assignment-company-assigned" target="_blank">Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Creating card section Project #2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center/cover' }}>
                            #2 Reactive Portfolio
                    </CardTitle>
                        <CardText>
                            Some text in the card
                    </CardText>
                        <CardActions border>
                            <Button colored href="" target="_blank">Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Creating card section Project #3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center/cover' }}>
                            #3 Tic Tac Toe
                    </CardTitle>
                        <CardText>
                            Some text in the card
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/rsl13a/tic-tac-toe" target="_blank">Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Creating card section Project #4 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center/cover' }}>
                            #4 To Do List
                    </CardTitle>
                        <CardText>
                            Some text in the card
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/rsl13a/to-do-list" target="_blank">Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="project-grid">
                    {/* Creating card section Project #1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/12/wvnNKfI-796x398.jpg) center/cover' }}>
                            #1 Nextagram
                    </CardTitle>
                        <CardText>
                            Some text in the card
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/rsl13a/nextagram" target="_blank">Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        }
    }

    render() {
        return (
            // Multiple selections of Projects
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>React</Tab>
                    <Tab>Flask</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Project;
