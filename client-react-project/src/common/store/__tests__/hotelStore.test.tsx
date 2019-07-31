import hotelStore from '../../store/hotelStore';
import dispatcher from '../../dispatcher/dispatcher'
import actionTypes from '../../actionTypes/hotelActionTypes'
const mockup = require('../../../../server/mockup/db.json');

describe ('/hotelStore/hotel tests',()=>{
    it('should return list of hotels', () => {
      expect(hotelStore.getHotels()).toEqual([])
      dispatcher.dispatch({ type: actionTypes.FETCH_HOTELS, payload: mockup.hotels });
      expect(hotelStore.getHotels()).toHaveLength( mockup.hotels.length);
    });

    it('should return object detail of a hotel', () => {
      expect(hotelStore.getHotel()).toEqual({})
      dispatcher.dispatch({ type: actionTypes.FETCH_HOTEL_DETAIL, payload: mockup.hotels[0] });
      expect(hotelStore.getHotel()).toHaveProperty("name");
      expect(hotelStore.getHotel()).toHaveProperty("address");
      expect(hotelStore.getHotel()).toHaveProperty("imageMain");
      expect(hotelStore.getHotel()).toHaveProperty("imageGalleries");
      expect(hotelStore.getHotel()).toHaveProperty("rating");
      expect(hotelStore.getHotel()).toHaveProperty("reviewScore");
      expect(hotelStore.getHotel()).toHaveProperty("reviewTotal");
      expect(hotelStore.getHotel()).toHaveProperty("price");
      expect(hotelStore.getHotel()).toHaveProperty("discountPercent");
      expect(hotelStore.getHotel()).toHaveProperty("exception");
      expect(hotelStore.getHotel()).toHaveProperty("urgent");
      expect(hotelStore.getHotel()).toHaveProperty("country");
      expect(hotelStore.getHotel()).toHaveProperty("offers");
      expect(hotelStore.getHotel()).toHaveProperty("options");
    });

    it('should return list of suggestion', () => {
      expect(hotelStore.getSuggestions()).toEqual([])
      dispatcher.dispatch({ type: actionTypes.FETCH_SUGGEST, payload: mockup.suggests });
      expect(hotelStore.getSuggestions()).toHaveLength( mockup.suggests.length);
    });

    it('should return list of hostInfo', () => {
      expect(hotelStore.getHostInfos()).toEqual([])
      dispatcher.dispatch({ type: actionTypes.FETCH_HOST_INFOS, payload: mockup.hostInfos });
      expect(hotelStore.getHostInfos()).toHaveLength( mockup.hostInfos.length);
    });
});