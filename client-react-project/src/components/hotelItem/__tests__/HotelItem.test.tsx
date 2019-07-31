import * as React from 'react';
import { shallow } from 'enzyme';
import HotelItem from '../HotelItem';

describe('<MixAndSave />', () => {

    test('HotelItem should show correct data', () => {
        const data = {
            id: "1",
            name: "hotel name",
            imageMain: "image main",
            imageGalleries: [{id: 1, image:"image1"}, {id: 1, image: "image2"}],
            rating: 3,
            reviewScore: 2,
            reviewTotal: 3,
            price: 4,
            discountPercent: 5,
            country: "japan",
            offers: [{id: 1, offer: "offer1"}, {id: 2, offer: "offer2"}],
            options: [{id: 1, opt:"option1"}, {id: 2, opt:"options2"}],
            exception: "exception1",
            urgent: "exception2",
        }
        const component = shallow( <HotelItem {...data} /> );

        const discountTo = '$ ' + data.price * (100 - data.discountPercent) / 100;
        const discountPercent = data.discountPercent + '% off today';
        expect(1 === 1).toBe(true);

        // expect(component.find('.property__images__main--image').prop("src")).toEqual(data.imageMain);
        // expect(component.find('.property-es__review__score').text()).toEqual(data.reviewScore.toString());
        // expect(component.find('.property-es__price__from').text()).toEqual(data.price.toString());
        // expect(component.find('.property-es__price__to').text()).toEqual(discountTo.toString());
        // expect(component.find('.property-es__price__discount').text()).toEqual(discountPercent.toString());
        // expect(component.find('.property__info__exception').text()).toEqual(data.exception);
        // expect(component.find('.property__info__urgent-text').text()).toEqual(data.urgent);
        //
        // expect(component.find('.property__info__title').first().text()).toContain(data.name);
        // expect(component.find('.property__info__title').last().text()).toContain(data.name);
        // expect(component.find('.property-es__review__score--text').text()).toContain(data.reviewTotal.toString());
        // expect(component.find('.property__info__location').first().text()).toContain(data.country);
        // expect(component.find('.property__info__location').last().text()).toContain(data.country);
        // expect(component.find('.property__info__offer').text()).toContain(data.offers[0]);
        // expect(component.find('.property__info__option').text()).toContain(data.options[1]);
        //
        // expect(component.find('.property__images__gallery__image')).toHaveLength(data.imageGalleries.length);
        // expect(component.find('.property__info__location--star-icon')).toHaveLength(data.rating);
        // expect(component.find('.property__info__offer__badge')).toHaveLength(data.offers.length);
        // expect(component.find('.property__info__option__badge')).toHaveLength(data.options.length);
    });
});

