import { connect } from 'react-redux';
import { fetchHotelDestinationList, fetchDetails } from '../common/hotelDestinationList.api';
import { searchExcursion } from '../common/hotelDestinationList.actions';
import HotelDestinationListView from './HotelDestinationListView';

const mapStateToProps = state => ({
  hotelDestinationList: state.hotelDestinationList.hotelDestinationList,
  isFetchingList: state.hotelDestinationList.isFetchingList,
  hotelDestinationErrorMessage: state.hotelDestinationList.hotelDestinationErrorMessage,
  isFetchingHotelDetails: state.hotelDestinationList.isFetchingHotelDetails,
});

const mapDispatchToProps = dispatch => ({
  fetchHotelDestinationList: () => dispatch(fetchHotelDestinationList()),
  fetchDetails: (countryName, destination) => dispatch(fetchDetails(countryName, destination)),
  searchExcursion: (value) => dispatch(searchExcursion(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelDestinationListView);
