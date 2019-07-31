import * as React from "react";
import { Link } from 'react-router-dom';
import './HotelItem.scss'

export interface HotelItemProps {
    id: string; 
    name: string; 
    imageMain: string;
    imageGalleries: {
        id: number;
        image: string;
    }[]; 
    rating: number; 
    reviewScore: number; 
    reviewTotal: number; 
    price: number; 
    discountPercent: number; 
    country: string; 
    offers: {
        id: number;
        offer: string;
    }[];
    options: {
        id: number;
        opt: string;
    }[];
    exception: string;
    urgent: string;
}

const HotelItem: React.StatelessComponent<HotelItemProps> = (props) => {

    const renderIconTranslate = (option) => {
        switch (option.trim()) {
            case "freee cancellation":
                return <i className="fa fa-ban"></i>;
            case "pay later":
                return <i className="fa fa-calendar-plus-o"></i>;
            case "pay at hotel":
                return<i className="fa fa-money"></i>;
            case "breakfast":
                return<i className="fa fa-coffee"></i>;
            case "dinner":
                return <i className="fa fa-cutlery"></i>;
            default:
                return null;
        }
    }

    const renderOffers = (offers) => {
        return (
            <div className="PropertyOffer">
                <p className="PropertyOffer__Title">Offers</p> 
                <ul>
                    {offers.map((value) =>
                        <li key={value.id} className="PropertyOffer__Badge">
                            {renderIconTranslate(value.offer)}
                            <span>{value.offer}</span> 
                        </li> 
                    )}
                </ul>
            </div>
        );
    }

    const renderOptions= (options) => {
        return (
            <div className="PropertyOption">
                <p className="PropertyOption__Title">Options</p> 
                <ul>
                    {options.map((value) =>
                        <li key={value.id} className="PropertyOption__Badge">
                            {renderIconTranslate(value.opt)}
                            <span>{value.opt}</span> 
                        </li> 
                    )}
                </ul>
            </div>
        );
    }

    const { id, imageMain, imageGalleries, name, rating, country, offers, options, exception, urgent, reviewTotal, reviewScore, discountPercent, price  } = props;
    return (
        <li>
            <Link to={{pathname: `/Hotel/${id}`}} className="PropertyContainer">
                <section className="Property__Left">
                    <div className="PropertyImage">
                        <img className="PropertyImage__Img" src={imageMain} /> 
                        <figure className="PropertyGalleryList">
                            {imageGalleries.map(value => 
                                <img key={value.id} className="PropertyGallery" src={value.image} /> 
                            )}
                        </figure>
                    </div>

                    <div className="PropertyInfo">
                        <h3 className="PropertyInfo__Title">{name}</h3>
                        <div className="PropertyInfo__Location">
                            {Array.apply(null, {length: rating}).map((e, i) => 
                                <i key={i} className="PropertyInfo__StarIcon fa fa-star"></i>
                            )}
                            <i className ="PropertyInfo__LocationIcon fa fa-map-marker"></i>
                            <span>{country}</span>
                        </div>
                        
                        {offers.length ? renderOffers(offers) : null}
                        {options.length ? renderOptions(options) : null}

                        {!!exception.trim() && <p className="PropertyInfo__Exception">{exception.trim()}</p>}
                        {!!urgent.trim() && <p className="PropertyInfo__UrgentText">{urgent.trim()}</p>}
                    </div>
                </section>

                <section className="Property__Right">
                    <div className="PropertyReviewScore">
                        <div className="PropertyReviewScore__Total">
                            <p>Very good</p>
                            <p>{reviewTotal + ' reviews'}</p>
                        </div>
                        <p className="PropertyReviewScore__Point">{reviewScore}</p>
                    </div>

                    <div className="PropertyPrice">
                        <div className="PropertyPrice__Discount">
                            <p>{discountPercent + '% off today'}</p>                            
                        </div>
                        <div className="PropertyPrice__Warning">
                            <i className="fa fa-exclamation-circle"></i>
                            <span>Nightly rates as low as</span>
                        </div>
                        
                        <strong className="PropertyPrice__From">{price}</strong>
                        <strong className="PropertyPrice__To">$ {price * (100 - discountPercent) / 100}</strong>

                        <div className="PropertyPrice__Warning">
                            <i className="fa fa-exclamation-circle"></i>
                            <span>compare price</span>
                        </div>

                        <strong className="PropertyPrice__Emergency">Our last room at price!</strong>
                    </div>
                </section>

                <section className="Property__Small">
                    <img className="Property__Img" src={imageMain} /> 
                    <h3 className="Property__Title">{name}</h3>

                    <div className="Property__Location">
                        <i className="Property__LocationIcon fa fa-map-marker"></i>
                        <span>{country}</span>
                    </div>
                        
                    <div className="Property__Warning">
                        <i className="fa fa-exclamation-circle"></i>
                        <span>compare price</span>
                    </div>
                </section>
            </Link>
        </li>
    );
}

export default HotelItem;