import * as React from "react";
import modalStore from '../../common/store/modalStore';
import modalActions from '../../common/actions/modalActions';
import ModalOnLoading from "../../components/modal/ModalOnLoading";
import ModalOnSearchFocus from "../../components/modal/ModalOnSearchFocus";

interface State {
    isSearchFocus: Boolean;
    isModalLoading: Boolean;
}
export default class ModalContainer extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            isSearchFocus: false,
            isModalLoading: false,
        }
    }

    _onChange = () => {
        this.setState({
            isSearchFocus: modalStore.getIsSearchFocus(),
            isModalLoading : modalStore.getIsModalLoading(),
        });
	}

	componentDidMount() {
		modalStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		modalStore.removeChangeListener(this._onChange);
	}

    closeSearchFocus = () => {
        modalActions.unFocusSearch();
        this.setState({isSearchFocus: false});
    }

    render() {
        const {isSearchFocus,isModalLoading} = this.state;

        return (
            <div className="Modal">
                {isModalLoading && <ModalOnLoading />}
                {isSearchFocus && <ModalOnSearchFocus closeSearchFocus={this.closeSearchFocus} />}
            </div>
        )
    }
}