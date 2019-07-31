import fetch from '../utils/fetch';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actionTypes/hotelActionTypes';

const hotelActions = {
  fetchHotels(keyword = "") {
    return fetch({
      url: 'hotels',
      dispatch: actionTypes.FETCH_HOTELS,
      query: { keyword },
    });
  },
  fetchHotelsWithCountry(country) {
    return fetch({
      url: 'hotels/country/{country}',
      dispatch: actionTypes.FETCH_HOTELS_WITH_COUNTRY,
      params: { country },
    });
  },
  fetchHotelDetail(id) {
    return fetch({
      url: 'hotels/{id}',
      params: { id },
      dispatch: actionTypes.FETCH_HOTEL_DETAIL
    });
  },
  fetchDefaultSuggestion() {
    return fetch({
      url: 'suggests',
      dispatch: actionTypes.FETCH_DEFAULT_SUGGEST,
    });
  },
  fetchSuggestion(keyword = "") {
    return fetch({
      url: 'suggests',
      dispatch: actionTypes.FETCH_SUGGEST,
      query: { keyword },
    });
  },
  setToDefaultSuggestion() {
    dispatcher.dispatch({
      type: actionTypes.SET_TO_DEFAULT_SUGGEST,
    });
  },
  fetchHostinfos() {
    return fetch({
      url: 'hostInfos',
      dispatch: actionTypes.FETCH_HOST_INFOS,
    });
  }
};

export default hotelActions;
