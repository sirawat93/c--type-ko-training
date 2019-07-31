import * as React from "react";
import Search from '../../containers/search/Search';
import HotelList from '../../containers/hotelList/HotelList';
import HostInfoList from '../../containers/hostInfosList/hostInfoList';
import './Home.scss'

const Home: React.StatelessComponent<{}> = () => {
    return (
        <main className="HomePage">
            <Search />
            <HostInfoList />
            <HotelList />
        </main>
    )
}

export default Home;
