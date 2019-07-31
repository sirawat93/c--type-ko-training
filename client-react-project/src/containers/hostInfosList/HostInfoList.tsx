import * as React from "react";
import HostInfoItem, { HostInfoItemProps } from '../../components/hostInfoItem/HostInfoItem';
import hotelActions from '../../common/actions/hotelActions';
import hotelStore from '../../common/store/hotelStore';
import './HostInfo.scss';

interface State {
    hostInfos: HostInfoItemProps[];
}
export default class HostInfo extends React.Component<{}, State> {
    constructor(props){
      super(props);
      this.state = {
        hostInfos: [],
      };
    }

    _onChange = () => {
		this.setState({ hostInfos: hotelStore.getHostInfos() });
	}

	componentDidMount() {
        hotelActions.fetchHostinfos();
		hotelStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		hotelStore.removeChangeListener(this._onChange);
	}

    render() {
        return (
            <ul className="HostInfoList">
                {this.state.hostInfos.map((data) => 
                    <HostInfoItem key={data.id} {...data} />
                )}
            </ul>
        )
    }
}