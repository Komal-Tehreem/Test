import React from 'react';
import { ReactNavbar } from 'react-responsive-animate-navbar';
import HotelDestinationListView  from '../hotelDestinationList/HotelDestinationListView.container';

const NavBar = () => {
    return (
      <ReactNavbar
        color='#f1803a'
        logo='https://i.pinimg.com/originals/36/c4/31/36c4310af1d68b5a06f894ba46ac30f1.jpg'
        menu={[
          { name: 'Packages', to: '/', component: HotelDestinationListView },
        ]}
        social={[
          {
            name: 'Linkedin',
            url: 'www.linkedin.com/in/komal-tehreem-883b74121',
            icon: ['fab', 'linkedin-in'],
          },
          {
            name: 'Github',
            url: 'https://github.com/Komal-Tehreem',
            icon: ['fab', 'github'],
          },
        ]}
      />
    );
}

export default NavBar;
