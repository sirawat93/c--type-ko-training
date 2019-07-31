import * as React from 'react';
import { shallow } from 'enzyme';
import SuggestItem from '../SuggestItem';

test('SuggestItem should show "test1" as a result', () => {
    const str = "test1";
    const component = shallow(<SuggestItem name={str} id="123" fetchHotelsWithCountry={() => {}} />);
    expect(component.find('.suggestion__name').text()).toEqual(str);
});