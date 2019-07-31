import * as React from "react";
import Router from "./Router";
import '../../common/styles/_base.scss';
import '../../common/styles/_variables.scss';
import './App.scss';

import SideBar from '../sidebar/SideBar';
import Modal from '../../containers/modal/Modal';

const App: React.StatelessComponent<{}> = () => {
    return (
        <div className="AppContainer">
            <SideBar />
            <Router />
            <Modal />
        </div>
    )
}

export default App;