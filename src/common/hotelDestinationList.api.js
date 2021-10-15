import requestMethod from './request';

import {
  fetchHotelDestinationListRequest,
  fetchHotelDestinationListSuccess,
  fetchHotelDestinationListError,
  fetchDetailsRequest,
  fetchDetailsSuccess,
  fetchDetailsError,
} from './hotelDestinationList.actions';

export const fetchHotelDestinationList = () => {
  return dispatch => {
    dispatch(fetchHotelDestinationListRequest());
    requestMethod('GET', 'https://hotelinfoservice.sunwingtravelgroup.com/en/AllHotelDestinationList')
    .then((response) => {
      dispatch(fetchHotelDestinationListSuccess(response.data));
    })
    .catch((error) =>{
      fetchHotelDestinationListError(error);
    });
  }
};

export const fetchDetails = (countryName, destination) => {
    return dispatch => {
      dispatch(fetchDetailsRequest());
      requestMethod('GET', `https://hotelinfoservice.sunwingtravelgroup.com/1/en/excursionsCountryDestination/${countryName}/${destination}`)
      .then((response) => {
        dispatch(fetchDetailsSuccess(response.data));
        
      })
      .catch((error) =>{
        fetchDetailsError(error);
      });
    }
  };
