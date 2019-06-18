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
        <h2>{this.props.C.name}</h2>
        <img className='img-fluid'
          width='300px'
          src={this.props.C.image}
          alt={this.props.C.name}>
        </img>
        <br></br><br></br>
        <p>{this.props.C.details}</p>
        <hr></hr>
      </div>
    );
  }
}

Service.propTypes = {
  C: PropTypes.object.isRequired,
};

export default Service;
