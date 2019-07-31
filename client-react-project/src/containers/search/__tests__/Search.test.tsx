import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../Search';
import Modal from '../../modal/Modal';

describe ('/page/home/Search tests', () => {

    it('Search changes the text after 222', () => {
        const search = shallow(<Search />)
        const searchButton = search.find('.search__form__button');
        searchButton.simulate('click', { preventDefault() {} });

        search.setState({'textFocus': true});
        search.setState({'search': {searchingStr: "test"}});
        expect(search.state('textFocus')).toBe(true);
    });

    it('When Input onFocus, modalOnSearch should be true ( background darker except SearchForm )', () => {
        const search = mount(<Search />);
        const model = mount(<Modal />);

        const searchInput = search.find('.search__form__input');
        expect(search.state('textFocus')).toBe(false);
        expect(model.state('isSearchFocus')).toBe(false);
        searchInput.simulate('focus');
        expect(search.state('textFocus')).toBe(true);
        expect(model.state('isSearchFocus')).toBe(true);
    });

    it('When click Button, textFocus should be false if notext in Input', () => {
        const search = mount(<Search />);
        const button = search.find('.search__form__button');

        expect(search.state('textFocus')).toBe(false);
        button.simulate('click', { preventDefault() {} });
        expect(search.state('textFocus')).toBe(false);
    });

    it('When click Button, textFocus should be true if there is text in the Input', () => {
        const search = mount(<Search />);
        const input = search.find('.search__form__input');
        const Button = search.find('.search__form__button');

        expect(search.state('textFocus')).toBe(false);
        input.simulate('focus');
        expect(search.state('textFocus')).toBe(true);
        search.setState({'search': { searchingStr: "thailand" }});
        Button.simulate('click', { preventDefault() {} });
        expect(search.state('textFocus')).toBe(false);
    });
});