import * as React from 'react';
import { shallow } from 'enzyme';
import HostInfoItem from '../HostInfoItem';

test('HostInfoItem should show correct data', () => {
    let data = {
      id: 1,
      title: "host title",
      type: "space",
      spaceUsed: 6,
      spaceTotal: 30,
      revenue: 0,
      bug: 0,
      text: "host text",
      warning: false,
    }
    const componentSpace = shallow( <HostInfoItem {...data} />);
    let detail = data.spaceUsed + '/' + data.spaceTotal + 'GB';
    expect(componentSpace.find('.hostInfo__card__title').text()).toEqual(data.title);
    expect(componentSpace.find('.hostInfo__card__detail').text()).toEqual(detail);
    expect(componentSpace.find('.hostInfo__card__footer__text').text()).toEqual(data.text);

    data.title = "host title2";
    data.type = "revenue";
    data.revenue = 1000;
    data.text = "host text2";
    const componentRevenue = shallow( <HostInfoItem {...data} />);
    detail = '$' + data.revenue;
    expect(componentRevenue.find('.hostInfo__card__title').text()).toEqual(data.title);
    expect(componentRevenue.find('.hostInfo__card__detail').text()).toEqual(detail);
    expect(componentRevenue.find('.hostInfo__card__footer__text').text()).toEqual(data.text);

    data.title = "host title3";
    data.type = "bug";
    data.bug = 123;
    data.text = "host text3";
    const componentBug = shallow( <HostInfoItem {...data} />);
    expect(componentBug.find('.hostInfo__card__title').text()).toEqual(data.title);
    expect(componentBug.find('.hostInfo__card__detail').text()).toEqual(data.bug.toString());
    expect(componentBug.find('.hostInfo__card__footer__text').text()).toEqual(data.text);

    data.title = "host title4";
    data.type = "fixedBug";
    data.bug = 321;
    data.text = "host text4";
    const componentFixedBug = shallow( <HostInfoItem {...data} />);
    expect(componentFixedBug.find('.hostInfo__card__title').text()).toEqual(data.title);
    expect(componentFixedBug.find('.hostInfo__card__detail').text()).toEqual(data.bug.toString());
    expect(componentFixedBug.find('.hostInfo__card__footer__text').text()).toEqual(data.text);
});