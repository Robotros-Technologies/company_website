import React from 'react';
import Support from '../img/mission.png';
import Service from '../components/Service';


/**
* React Component to Render home page
* @author [Aron Roberts](https://github.com/robotros)
*/
class Home extends React.Component {
  state ={
    causes: [
      {
        'name': 'Office 365 Licensing',
        'details': 'As a Mircosoft Partner we offer a variety of licensing models to best conform to your business requirements.',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/7/74/Office_365_logo.png',
      },
      {
        'name': 'Technology Consulting',
        'details': 'We will review your the current tools your business is using alongside each business process. We will then work with you to identify any struggles or gaps in the process and help identify how you can better utilize you current tools or leverage on new technologies to improve the effectiveness of you business.',
        'image': '#',
      },
      {
        'name': 'Managed Infrastructure Support',
        'details': 'We can provide managed support for your IT enviroment. Using a combination of remote and on-site resources we will assit you in managing a complete IT Infrastructure from desktop support to basic network needs. This allows small business to focus on the business and minimize technical staffing needs.',
        'image': '#',
      },
      {
        'name': 'Website Design and Social Branding',
        'details': 'Small Business often times neglect the importance of an online presence. We offer SEO optimized ADA compliant Web-design as well as the ability to create and establish an intial social media presence that a business can grow and leverage in the future.',
        'image': '#',
      },
      {
        'name': 'IT Project Managment and consultation',
        'details': 'Companies often times set ambitious project goals but do not know where to start. We can assit you with your IT project by managing it for you or breaking it down into smaller projects that a company can manage internal step by step.',
        'image': '#',
      },
    ],
  }
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    let support=Support;
    return (
      <div className='Services container'>
        <img width='1080px' src={support} alt='code'></img>
        <h1>Our Services</h1>
        <hr></hr>
        <section>
          {this.state.causes.map((C) =>
            <Service
              key={C.url}
              C={C}
            />
          )}
        </section>
      </div>
    );
  }
}

export default Home;
