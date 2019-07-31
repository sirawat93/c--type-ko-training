import * as React from "react";
import './HotelDetail.scss';

const HotelDetail: React.StatelessComponent<{}> = () => {
    return (
        <main className="HotelDetailPage">
            <section className="HotelDeInfoReview">
                <div className="HotelDeInfo">
                    <h3 className="HotelDeInfo__Title">Adriatic Hotel</h3>
                    {Array.apply(null, {length: 2}).map((_, i) => 
                        <i key={i} className="HotelDeInfo__StarIcon fa fa-star"></i>
                    )}
                    <div className="HotelDeInfo__Location">
                        <i className="HotelDeInfo__LocationIcon fa fa-map-marker"></i>
                        <span> Vatican, Rome - Exceptional Location - View on Map </span>
                    </div>
                    <p><u>Have a question for Adriatic hotel?</u></p>
                </div>
                <div className="HotelDeReview">
                    <div className="HotelDeReviewScore">
                        <div className="HotelDeReviewScore__Total">
                            <p>Very good</p>
                            <p>142 reviews</p>
                        </div>
                        <p className="HotelDeReviewScore__Point">7.9</p>
                    </div>
                    <p>recommend by 81% of guess</p>
                </div>
            </section>
            
            <section className="HotelDeTransport">
                <p className="HotelDeTransport__Title">Things you'll love</p>
                <ul className="HotelDeTransport__Offers">
                    <li className="HotelDeTransport__EachOffer">
                        <i className="fa fa-fighter-jet"></i>
                        <p>Airports Transfer</p>
                    </li>
                    <li className="HotelDeTransport__EachOffer">
                        <i className="fa fa-train"></i>
                        <p>660 meters to public transportation</p>
                    </li>
                    <li className="HotelDeTransport__EachOffer">
                        <i className="fa fa-wifi"></i>
                        <p>Free Wi-Fi in all rooms</p>
                    </li>
                    <li className="HotelDeTransport__EachOffer">
                        <i className="fa fa-pagelines"></i>
                        <p>Garden</p>
                    </li>
                </ul>
            </section>

            <section className="HotelDeChoicePrice">
                <div className="HotelDeChoice">
                    <p className="HotelDeChoice__Title">Room Choices</p>
                    <p>prices do not include taxes & fees</p>
                    <p className="HotelDeChoice__Filter">Filter room option by</p>
                </div>
                <div className="hotelDePrice">
                    <div className="hotelDePrice__Noti">
                        <i className="fa fa-bell-o"></i>
                        <span>GET PRICE ALERTS</span>
                    </div>
                    <p className="hotelDePrice__Guarantee">prices do not include taxes & fees</p>
                    <p className="hotelDePrice__Clear">CLEAR</p>
                </div>
             </section>

             <section >
                <ul className="HotelDeOptions">
                    <li className="HotelDeOptions__EachOption">
                        <i className="fa fa-ban"></i>
                        <span>Free cancelation</span>
                    </li>
                    <li className="HotelDeOptions__EachOption">
                        <i className="fa fa-calendar-plus-o"></i>
                        <span>Pay later option</span>
                    </li>
                    <li className="HotelDeOptions__EachOption">
                        <i className="fa fa-money"></i>
                        <span>Pay at hotel</span>
                    </li>
                </ul>
            </section>

            <section className="HotelDePopularity">
                <div className="HotelDePopularity__EachPop">
                    <i className="fa fa-calendar-plus-o"></i>
                    <div className="HotelDePopularity__Text">
                        <p>5 room type with 10 total rooms available</p>
                        <a className="HotelDePopularity__Text--link">See all rooms</a>
                    </div>
                </div>
                <div className="HotelDePopularity__EachPop">
                    <i className="fa fa-calendar-plus-o"></i>
                    <div className="HotelDePopularity__Text">
                        <p>5 room type with 10 total rooms available</p>
                        <p>Right Now</p>
                    </div>
                </div>
                <div className="HotelDePopularity__EachPop">
                    <i className="fa fa-calendar-plus-o"></i>
                    <div className="HotelDePopularity__Text">
                        <p>5 room type with 10 total rooms available</p>
                        <p>High Demand</p>
                    </div>
                </div>
            </section>

            <section className="HotelDeImageStatus">
                <article className="HotelDeImage">
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-z1v8wi4Yd61uf0xjNMtHKrVKkvs5_3JDNnkWUxDrpUvgiEjsQ'} /> 
                    <p><strong>Standard Double</strong></p>
                </article>
                <article className="HotelDeStatus">
                    <p>This property is in high demandd-book an available room while you can</p>
                </article>

            </section>

        </main>
    );
}
export default HotelDetail;