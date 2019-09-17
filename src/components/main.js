// Set all the routes from index.js

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Start to import all JS that wants to be routed
import Landing from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Project from './projects';
import Resume from './resume';


const Main = () => (
    <Switch>
        {/* path = class Landing in landingpage.js , component = landingpage.js file */}
        <Route exact path="/" component={Landing} />
        {/* path = class About in aboutme.js , component = aboutme.js file */}
        <Route path="/aboutme" component={About} />
        {/* path = class Contact in contact.js , component = contact.js file */}
        <Route path="/contact" component={Contact} />
        {/* path = class Project in projects.js , component = projects.js file */}
        <Route path="/projects" component={Project} />
        {/* path = class Resume in resume.js , component = resume.js file */}
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;