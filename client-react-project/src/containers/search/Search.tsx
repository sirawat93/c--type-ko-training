import * as React from "react";
import SuggestList from '../../components/suggestList/SuggestList';
import modalActions from '../../common/actions/modalActions';
import hotelActions from '../../common/actions/hotelActions';
import modalStore from '../../common/store/modalStore';
import hotelStore from '../../common/store/hotelStore';
import './Search.scss'

const _ = require('lodash');
const homeImage = require('../../common/images/nha-homes.png');

interface State {
    suggestList: {
        name: string,
        id: string,
    }[];
    textFocus: boolean;
    isloading: boolean;
    search: {
        searchingStr: string;
    };
}

export default class Search extends React.Component<{}, State> {
    private myRef = React.createRef<HTMLInputElement>()
    constructor(props) {
        super(props);
        this.state = {
            suggestList: [],
            textFocus: false,
            isloading: false,
            search: {
                searchingStr: "",
            }
        }
    }

    _onChangeSearchFocus = () => {
		this.setState({ textFocus: modalStore.getIsSearchFocus() });
    }
    
    _onChangeSuggestion = () => {
		this.setState({ suggestList: hotelStore.getSuggestions() });
	}

	componentDidMount() {
        hotelActions.fetchDefaultSuggestion();
		modalStore.addChangeListener(this._onChangeSearchFocus);
		hotelStore.addChangeListener(this._onChangeSuggestion);
	}

	componentWillUnmount() {
		modalStore.removeChangeListener(this._onChangeSearchFocus);
		hotelStore.removeChangeListener(this._onChangeSuggestion);
	}

    onChangeText = (e) => {
        this.state.search.searchingStr = e.target.value;
    }

    onFocus = () => {
        if(!this.state.textFocus) {
            this.setState({textFocus: true});
            modalActions.focusSearch();
        }
    }

    handleEnter = (e) => {
        const {searchingStr} = this.state.search;
        if(searchingStr === "") {
            hotelActions.setToDefaultSuggestion();
        } else {
            this.state.search.searchingStr = searchingStr
            this.setState({isloading: true});
            hotelActions.fetchSuggestion(searchingStr).then(() => {
                this.setState({isloading: false});
            }).catch(() => {
                this.setState({isloading: false});
            });
        }

        if(e.keyCode == 13){
            const node = this.myRef.current
            if(node) {
                node.blur();
            }
            this.searchHotel();
        }
     }

    searchHotel = () => {
        const {searchingStr} = this.state.search;
        if(searchingStr !== "") {
            this.fetchHotels(searchingStr)
        }
    }

    fetchHotels = (keyword) => {
        this.setState({textFocus: false});
        modalActions.unFocusSearch();
        modalActions.openModalloading();
        hotelActions.fetchHotels(keyword).then(() => {
            modalActions.closeModalloading();
        }).catch(() => {
            modalActions.closeModalloading();
        })
    }

    fetchHotelsWithCountry = (country) => {
        this.setState({textFocus: false});
        modalActions.unFocusSearch();
        modalActions.openModalloading();
        hotelActions.fetchHotelsWithCountry(country).then(() => {
            modalActions.closeModalloading();
        }).catch(() => {
            modalActions.closeModalloading();
        })
    }

    render() {
        const {textFocus, isloading, suggestList} = this.state;
        const myHandler = _.flowRight(
            _.debounce(this.handleEnter, 5e2),
            _.clone
        );
        
        return (
            <header className="SearchHeader">
                <section>
                    <h1 className="SearchHeader__Title">Welcome to agoda</h1>
                    <h2 className="SearchHeader__Subtitle">the effortless engine for Hotels and Accomodations</h2>
                    <div className="SearchForm">
                        <i className="SearchForm__Icon fa fa-search"></i>
                        <input 
                            type="text" 
                            className="SearchForm__Input"
                            onChange={this.onChangeText}
                            onFocus={this.onFocus}
                            onKeyDown={myHandler}
                            ref={this.myRef}
                        />
                        <button onClick={this.searchHotel} type="button" className="SearchForm__Button">Search</button>

                        {textFocus && 
                            <SuggestList
                                isloading={isloading} 
                                suggestList={suggestList} 
                                fetchHotelsWithCountry={this.fetchHotelsWithCountry} 
                            />
                        }
                    </div>
                    <p className="SearchHeader__ResultExample">traveling search Tokyo,Hong Kong, New York</p>
                </section>

                <section className="BecomeHost">
                    <img className="BecomeHost__Image" src={homeImage} /> 
                    <span>Become a Host</span> 
                    <i className="BecomeHost__Icon fa fa-arrow-right"></i>
                </section>
            </header>
        )
    }
}
