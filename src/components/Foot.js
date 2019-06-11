import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SocialIcon} from 'react-social-icons';

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
            <div className='col-md-6'>
              {this.props.social.map((S) =>
                <SocialIcon
                  key={S.url}
                  url={S.url}
                />
              )}
            </div>
            <div className='col-md-6'>
              <p className='m-0 text-center text-black'>
                 Copyright <FontAwesomeIcon icon='copyright' /> 2019 WMPQ Gaming
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