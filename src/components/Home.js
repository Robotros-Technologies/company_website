import React from 'react';
import Support from '../img/support.png';


/**
* React Component to Render WMPQ.org home page
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
        <p>We are IT support specialist with years of business experience helping users in their business workplace. From small to medium enterprise size businesses, we have been helping our users solve a multitide of issues users normally face in workplace networks. We have experience in handling everything from desktop support issues all the way through entire ERP rollouts.</p>
        <p>We understand that IT for a business is a cost center and look to help business become more effiecent by implementing the latest technologies while still lowering their expenses related to implementation and long term support</p>
      </div>
    );
  }
}

export default Home;
