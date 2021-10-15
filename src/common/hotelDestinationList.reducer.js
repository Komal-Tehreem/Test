import {
  FETCH_HOTEL_DESTINATION_LIST_REQUEST,
  FETCH_HOTEL_DESTINATION_LIST_SUCCESS,
  FETCH_HOTEL_DESTINATION_LIST_ERROR,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_ERROR,
  SET_SEARCH_EXCURSION_VALUE,
} from './hotelDestinationList.actions';

const initialState = {
  hotelDestinationList: [],
  hotelDetails: [],
  isFetchingList: false, 
  isFetchingHotelDetails: false,
  hotelDestinationErrorMessage: '',
  hotelDetailsErrorMessage: '',
}

const hotelDestinationListReducer = (state = initialState, action) => {
  switch(action.type)
  {
    case FETCH_HOTEL_DESTINATION_LIST_REQUEST:
      return {
        ...state,
        isFetchingList: true
      };

    case FETCH_HOTEL_DESTINATION_LIST_SUCCESS:
      return {
        ...state,
        hotelDestinationList: action.data,
        isFetchingList: false
      };

    case FETCH_HOTEL_DESTINATION_LIST_ERROR:
      return {
        ...state,
        hotelDestinationErrorMessage: action.errorMessage,
        isFetchingList: false
      };

    case FETCH_DETAILS_REQUEST:
      return {
        ...state,
        isFetchingHotelDetails: true
      };

    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        hotelDetails: action.data,
        isFetchingHotelDetails: false
      };

    case FETCH_DETAILS_ERROR:
      return {
        ...state,
        hotelDetailsErrorMessage: action.errorMessage,
        isFetchingHotelDetails: false
      };

    case SET_SEARCH_EXCURSION_VALUE:
      return {
        ...state,
        excursionSearchValue: action.value,
      }
    default:
      return state;
  }
};

export default hotelDestinationListReducer;
