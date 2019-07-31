import { EventEmitter } from 'events';
import actionTypes from '../actionTypes/hotelActionTypes';
import dispatcher from '../dispatcher/dispatcher';
import {HotelItemProps} from '../../components/hotelItem/HotelItem';
import {HostInfoItemProps} from '../../components/hostInfoItem/HostInfoItem';

let hotels: HotelItemProps[] = []
let hotel: HotelItemProps;
let suggests: any[] = [];
let defaultSuggest: any[] = [];
let hostinfos: HostInfoItemProps[] = [];

const CHANGE = 'CHANGE';

class hotelStore extends EventEmitter {
  constructor() {
    super();
    dispatcher.register(this.reduce.bind(this));
  }

  getHotels(): HotelItemProps[] {
    return hotels;
  }

  getHotel(): HotelItemProps {
    return hotel;
  }

  getSuggestions(): any[] {
    return suggests;
  }

  getHostInfos(): HostInfoItemProps[] {
    return hostinfos;
  }

  addChangeListener(callback) {
    this.on(CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE, callback);
  }

  reduce(action) {
    switch (action.type) {
      case actionTypes.FETCH_HOTELS_WITH_COUNTRY: {
        if(action.payload.length) {
          hotels = action.payload;
        }
        break;
      }
      case actionTypes.FETCH_HOTELS: {
        hotels = action.payload;
        break;
      }
      case actionTypes.FETCH_HOTEL_DETAIL: {
        hotel = action.payload;
        break;
      }
      case actionTypes.FETCH_SUGGEST: {
        suggests = action.payload;
        break;
      }
      case actionTypes.FETCH_DEFAULT_SUGGEST: {
        defaultSuggest = action.payload;
        suggests = defaultSuggest;
        break;
      }
      case actionTypes.SET_TO_DEFAULT_SUGGEST: {
        suggests = defaultSuggest;
        break;
      }
      case actionTypes.FETCH_HOST_INFOS: {
        hostinfos = action.payload;
        break;
      }
      default: break;
    }
    this.emit(CHANGE);
  }
}

export default new hotelStore();
