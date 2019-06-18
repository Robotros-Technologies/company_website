import React from 'react';
import Support from '../img/support.png';


/**
* React Component to Render home page
* @author [Aron Roberts](https://github.com/robotros)
*/
class Home extends React.Component {
  state = {
  }
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    let support=Support;
    return (
      <div className='Home container'>
        <img width='1080px' src={support} alt='laptops'></img>
        <h1> About Us</h1>
        <hr></hr>
        <p>We are leaders in the Information Technology space with more than 10 years of experience helping users in the workplace. From small to medium enterprise size businesses, we have been helping our users solve issues and overcome unique challenges in their companies technological strategies. We have experience in handling everything from basic desktop support issues all the way through extensive ERP rollouts and data migrations.</p>
        <p>We understand that IT for a business is a cost center and look to help business become more effiecent by implementing the latest technologies while still lowering their expenses related to implementation and long term support</p>
      </div>
    );
  }
}

export default Home;
