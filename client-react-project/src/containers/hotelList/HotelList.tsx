import * as React from "react";
import HotelItem, { HotelItemProps } from '../../components/hotelItem/HotelItem';
import hotelStore from '../../common/store/hotelStore';

import "./hotelList.scss";

interface State {
    hotelList: HotelItemProps[];
}

export default class HelloList extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            hotelList: [],
        }
    }

    _onChange = () => {
		this.setState({ hotelList: hotelStore.getHotels() });
	}

	componentDidMount() {
		hotelStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		hotelStore.removeChangeListener(this._onChange);
    }
    
    render() {
        return (
            <ol className="HotelList">
                {this.state.hotelList.map((data) => 
                    <HotelItem key={data.id} {...data} />
                )}
            </ol>
        );
    }
}
