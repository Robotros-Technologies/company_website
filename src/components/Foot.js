/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint no-invalid-this: "warn" */
/* eslint max-len: "warn" */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SocialIcon} from 'react-social-icons';
import Partner from '../img/MicrosoftPartner.png';
import Sherweb from '../img/sherweb.png';

/**
* React Component to Render footer for WMPQ Gaming
* @author [Aron Roberts](https://github.com/robotros)
*/
class Foot extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <footer className='py-5 bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              {this.props.social.map((S) =>
                <SocialIcon
                  key={S.url}
                  url={S.url}
                />
              )}
            </div>
            <div className='col-md-4'>
              <img src={Partner} alt='Microsoft Partner' height='80px'></img>
            </div>
            <div className='col-md-4'>
              <img src={Sherweb} alt='Authorized by Sherweb' height='80px'></img>
            </div>


          </div>
          <hr></hr>
          <div className='row'>
            <div id='copyright' className='col-md-12'>
              <p className='m-0 text-center text-black'>
                Copyright <FontAwesomeIcon icon='copyright' />
                {new Date().getFullYear()} {this.props.company}
              </p>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}

Foot.propTypes = {
  social: PropTypes.array.isRequired,
};

export default Foot;
