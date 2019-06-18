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
        <img className='img-head' src={support} alt='laptops'></img>
        <h1> About Us</h1>
        <hr></hr>
        <p>We are leaders in the Information Technology space with more than 10 years of experience helping users in the workplace. Specializing in the needs of small to medium size businesses, we have been helping our users solve issues and overcome unique challenges by aligning their technological strategies. We have experience in handling everything from basic desktop support issues all the way through extensive ERP rollouts and data migrations.</p>
        <p>We understand that IT for a small business is often viewed as a cost center and look to help business implement the latest technologies that their business can benefit from while still lowering their expenses related to implementation and long term support greatly increasing the ROI.</p>
      </div>
    );
  }
}

export default Home;
