import React, { useEffect, useState } from 'react';
import { Select, Button, Spin, Alert } from 'antd';
import HotelDetails from '../hotelDetails/HotelDetailsList.container';
import 'antd/dist/antd.css';
import './hotelDestinationList.css';

const { Option } = Select;
// const { Search } = Input;

const HotelDestinationListView = (props) => {
  const {
    fetchHotelDestinationList,
    fetchDetails,
    hotelDestinationList,
    isFetchingList,
    isFetchingHotelDetails,
    hotelDestinationErrorMessage,
  } = props;

  const [destinations, setDestinations] = useState('');
  const [country, setCountry] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    fetchHotelDestinationList();
  }, []);

  useEffect(() => {
    if (hotelDestinationList.length) {
      setDestinations(hotelDestinationList[0].destinations);
      setCountry(hotelDestinationList[0].countryName);
    }
  }, [hotelDestinationList, isFetchingList]); 

  const handleChange = (value) => {
    setDestinations(value.value);
    setCountry(value.label);
  }

  return (
    <div className='hotel-list'>
      {hotelDestinationErrorMessage && <Alert message={hotelDestinationErrorMessage} type="error" />}
      {isFetchingList && !hotelDestinationList ? <Spin className="spin" size='large' /> :
      <div className='hotel-list-div margin-top-50'>
        <Select
          labelInValue
          size='large'
          placeholder={'From'}
          onChange={handleChange}
          className={'margin-right margin-left radius margin-bottom width-220'}
        >
          {hotelDestinationList.map((value, key) => (
            <Option key={key} value={value.destinations}>
              {value.countryName}
            </Option>
          ))}
        </Select>
        {destinations && <Select
          labelInValue
          size='large'
          placeholder={'Destination'}
          onChange={(value) => setDestination(value.value)}
          className={'margin-right margin-left radius margin-bottom width-220'}
        >
          {destinations.map((value, key) => (
            <Option key={key} value={value}>
              {value}
            </Option>
          ))}
        </Select>}
        <Button
          loading={isFetchingHotelDetails}
          type='primary'
          size='large'
          className={'margin-right margin-left radius margin-bottom width-220'}
          onClick={() => fetchDetails(country, destination)}
        >
          Search
        </Button>
        {/* <Search
          size='large'
          placeholder='Excursion Full Name'
          className={'margin-right margin-left radius margin-bottom width-220'}
          onSearch={(value) => searchExcursion(value)}
          enterButton
        /> */}
      </div>}
      {<HotelDetails />}
    </div>
  );
};

export default HotelDestinationListView;
