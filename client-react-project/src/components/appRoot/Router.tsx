import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from '../homePage/Home';
import HotelDetail from '../hotelDetailPage/HotelDetail';
import NotFound from '../error/NotFound';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Hotel/:id" component={HotelDetail} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Router;
