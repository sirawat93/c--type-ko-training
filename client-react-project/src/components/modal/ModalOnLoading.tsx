import * as React from "react";
import ReactLoading from 'react-loading';
import './Modal.scss';

const ModalOnLoading: React.StatelessComponent<{}> = () => {
    return (
        <div className="ModalLoding">
            <div className="ModalLoding__Icon">
                <ReactLoading type="spin" height={40} width={40} color="#000"/>
            </div>
        </div> 
    )
}

export default ModalOnLoading;