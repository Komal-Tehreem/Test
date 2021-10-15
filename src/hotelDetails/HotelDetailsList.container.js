import { connect } from 'react-redux';
import HotelDetails from './HoteDetailsList';

const mapStateToProps = state => ({
  hotelDetails: state.hotelDestinationList.hotelDetails,
  isFetchingHotelDetails: state.hotelDestinationList.isFetchingHotelDetails,
  hotelDetailsErrorMessage: state.hotelDestinationList.hotelDetailsErrorMessage,
  excursionSearchValue: state.hotelDestinationList.excursionSearchValue,
});

export default connect(mapStateToProps, null)(HotelDetails);
