export const FETCH_HOTEL_DESTINATION_LIST_REQUEST = 'FETCH_HOTEL_DESTINATION_LIST_REQUEST';
export const FETCH_HOTEL_DESTINATION_LIST_SUCCESS = 'FETCH_HOTEL_DESTINATION_LIST_SUCCESS';
export const FETCH_HOTEL_DESTINATION_LIST_ERROR = 'FETCH_HOTEL_DESTINATION_LIST_ERROR';

export const FETCH_DETAILS_REQUEST = 'FETCH_DETAILS_REQUEST';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_ERROR = 'FETCH_DETAILS_ERROR';

export const SET_SEARCH_EXCURSION_VALUE = 'SET_SEARCH_EXCURSION_VALUE';

export const fetchHotelDestinationListRequest = () => ({
  type: FETCH_HOTEL_DESTINATION_LIST_REQUEST,
});

export const fetchHotelDestinationListSuccess= (data) => ({
  type: FETCH_HOTEL_DESTINATION_LIST_SUCCESS,
  data,
});

export const fetchHotelDestinationListError = (error) => ({
  type: FETCH_HOTEL_DESTINATION_LIST_ERROR,
  error,
});

export const fetchDetailsRequest = () => ({
  type: FETCH_DETAILS_REQUEST,
});
  
export const fetchDetailsSuccess= (data) => ({
  type: FETCH_DETAILS_SUCCESS,
  data,
});
  
export const fetchDetailsError = (error) => ({
  type: FETCH_DETAILS_ERROR,
  error,
});

export const searchExcursion = (value) => ({
  type: SET_SEARCH_EXCURSION_VALUE,
  value,
});