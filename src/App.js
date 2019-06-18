/**
* filename: App.js
* Main component to render  Webpage
*
* Author:[Aron Roberts](github.com/robotros)
* Last Update: 06/10/2019
*/
import React from 'react';
import {Route} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCopyright, faFlagUsa} from '@fortawesome/free-solid-svg-icons';
import Head from './components/Head';
import Foot from './components/Foot';
import Home from './components/Home';
import Services from './components/Services';
import './css/app.css';

// font awesome icon library
library.add(faCopyright, faFlagUsa);

/**
* React Component to Render robotros.tech
* @author [Aron Roberts](https://github.com/robotros)
*/
class RoboTechApp extends React.Component {
  state = {
    Nav: [
      {
        'path': '/',
        'label': 'Home',
        'component': Home,
      },
      {
        'path': '/Service',
        'label': 'Services',
        'component': Services,
      },
    ],
    social: [
      {'url': 'https://www.facebook.com/robotrostech'},
      {'url': 'https://www.linkedin.com/company/robotros-technologies'},
      // {'url': 'mailto:a.roberts@robotros.tech'},
    ],
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <main className='app'>
        <Head Nav={this.state.Nav}/>
        <div className='center'>
          {this.state.Nav.map((page) =>
            <Route
              key={page.label}
              exact path={page.path}
              component={page.component}
            />
          )}
        </div>
        <Foot social={this.state.social}/>
      </main>
    );
  }
}

export default RoboTechApp;
