import * as React from "react";
import './Modal.scss';

interface Props {
    closeSearchFocus: () => void;
}

const ModalOnSearchFocus: React.StatelessComponent<Props> = (props) => {
    return (
        <div className="OnSearchFocus" onClick={props.closeSearchFocus} />
    )
}

export default ModalOnSearchFocus;