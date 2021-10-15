import React from 'react';
import HotelDetailsNoData from './HotelDetialsNoData';
import { Card, Row, Col, Tooltip, Alert } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import './hotelDetailsList.css';
import 'antd/dist/antd.css';

const { Meta } = Card;

const HotelDetails = (props) => {
  const {
    hotelDetails,
    isFetchingHotelDetails,
    hotelDetailsErrorMessage,
  } = props;

  //  let filteredHotelDetails = hotelDetails.filter(eachVal => {
  //   let opt = eachVal.subCategories.some((
  //       { excursions }) => excursions
  //       .some(({ excursionFullName }) => excursionFullName === excursionSearchValue));
  //   return opt;
  //   });

  return (
    <div className='margin-top-20'>
      {hotelDetailsErrorMessage && <Alert message={hotelDetailsErrorMessage} type='error' />}
      {isFetchingHotelDetails || !hotelDetails.length ? <HotelDetailsNoData /> :
        hotelDetails.map((hotel, key) => {
        return (
          <Row>
            <Col span={18} push={6} className='column-details'>
              {hotel.subCategories.map((categories) =>
                categories.excursions.map(excursion => {
                  return <Card
                    hoverable
                    className='card'
                    cover={<img alt={`${categories.subCategoryName} view`} src={excursion.excursionImages.Img4x3[0]} />}
                    actions={[ 
                      <Tooltip color={'black'} title={<span style={{whiteSpace: 'pre-wrap'}}>{excursion.excursionShortDescription}</span>}>
                        <EllipsisOutlined key='ellipsis' />
                      </Tooltip>
                    ]}
                  >
                    <Meta title={`${categories.subCategoryName}`} description={`${excursion.excursionFullName} - ${excursion.excursionCode}`} />
                  </Card>}
                )
              )}
            </Col>
            <Col span={6} pull={18} className={'margin-top-50 padding-left'}>
              <h2>{hotel.categoryName}</h2>
            </Col>
          </Row>
        )
        })
      }
    </div>
  );
};

export default HotelDetails;
