import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
* React Component to Render Charitable Cause
* @author [Aron Roberts](https://github.com/robotros)
*/
class Service extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div>
        <h2 className='center-align'>{this.props.C.name}</h2>
        <div className='row'>
          <div className='col-md-4 offset-md-2'>
            <img className='img-fluid img-service'
              src={this.props.C.image}
              alt={this.props.C.name}>
            </img>
          </div>
          <div className='col-md-4'>
            <p>{this.props.C.details}</p>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

Service.propTypes = {
  C: PropTypes.object.isRequired,
};

export default Service;
