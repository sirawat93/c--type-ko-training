import * as React from "react";
import ReactLoading from 'react-loading';
import SuggestItem from './SuggestItem';
import './SuggestList.scss';

export interface SuggestListProps {
    isloading: boolean;
    suggestList: {
        name: string,
        id: string,
    }[];
    fetchHotelsWithCountry: (string) => void;
}

const SuggestList: React.StatelessComponent<SuggestListProps> = (props) => {

    const renderLoading = () => {
        return (
            <div className="SearchHeader__SuggestListLoading"> 
                <ReactLoading type="spin" height={40} width={40} color="#000"/>
            </div>
        );
    };
    
    const renderSuggest = () => props.suggestList.map((data, index) => {
        return (
            <SuggestItem key={index} {...data} fetchHotelsWithCountry={props.fetchHotelsWithCountry} />
        );
    });
    
    const render = props.isloading ? renderLoading: renderSuggest;

    return (
        <div className="SearchHeader__SuggestList">
            {render()}
        </div>
    );
};

export default SuggestList;