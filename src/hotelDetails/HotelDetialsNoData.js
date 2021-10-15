import React from 'react';
import { Carousel } from 'antd';
import slider1 from '../common/images/slider1.jpg';
import slider2 from '../common/images/slider2.jpg';
import slider3 from '../common/images/slider3.jpg';
import 'antd/dist/antd.css';

const HotelDetailsNoData = () => {
  return (<div className='margin-top-50'>
    <Carousel autoplay>
      <img
        key={1}
        src={slider1}
        alt={'slider'}
        height={'100%'}
       />
      <img
        key={2}
        src={slider2}
        alt={'slider'}
       />
       <img
        key={3}
        src={slider3}
        alt={'slider'}
       />
    </Carousel>
    <h1 className='h1'>Sunwing Travel Group</h1>
    <p className='p'>
      The largest travel company in North America, the vertically integrated Sunwing Travel Group generates over $3 billion in annual revenue.
    </p><p className='p'>
      Holding a position on PROFIT Magazine's annual list for 13 consecutive years, the Group has grown to operate a leisure charter airline with a modern fleet of 40 planes and a luxury charter service with access to private jets suited to every type of client, three major North American tour operators, two renowned travel retailers, a hotel division with over 7,000 rooms, a vacation club and a destination management company reporting triple-digit growth.
    </p><p className='p'>
      Sunwing Travel Group is also heavily involved in the communities of the destinations it operates in. In 2015, the charitable initiative of the Sunwing Foundation was established by the Hunter family to support the development of youth in the communities where it operates in the form of project funding or the transport of humanitarian aid. Since its inception, the foundation has spearheaded and participated in numerous initiatives such as the construction of a brand new school, Spicy Hill Early Childhood Institution in Trelawny, Jamaica.
    </p>
  </div>);
};

export default HotelDetailsNoData;
