import * as React from "react";
import './SuggestItem.scss';

export interface SuggestItemProps {
    name: string,
    id: string,
    fetchHotelsWithCountry: (string) => void;
}

const SuggestItem: React.StatelessComponent<SuggestItemProps> = (props) => {
    return (
        <div className="Suggestion" onClick={() => props.fetchHotelsWithCountry(props.name)}>
            <p>{props.name}</p>
        </div>
    );
};

export default SuggestItem;