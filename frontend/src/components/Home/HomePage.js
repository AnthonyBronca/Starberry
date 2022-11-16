import React from 'react';
import NavBar from '../NavBar/NavBar';
import './home.css'
import deltaImage from './data/images/delta-ad.jpg'
import foodImage from './data/images/food-ad.png'
import seasonalDrink from './data/images/seasonal-drink.jpg'
import seasonalPastry from './data/images/seasonal-pastry.jpg'





export default function HomePage() {

    return (
        <div>
            <NavBar />
            <hr
                width='110%'
                style={{ position: 'relative', right: '1rem' }}
                color='#D9D9D9' />

            {ads.map((ad, idx) =>
            (
                idx % 2 === 0 ? <div key={idx} className='ad-container'>
                    <div className='ad-image-container'>
                        <img className='ad-image' src={adImages[idx]} alt='promotional-item' />
                    </div>
                    <div className='ad-info-container' style={{ backgroundColor: adInfoColors[0] }}>
                        <h2 className='ad-info ad-info-header'>{ad.header}</h2>
                        <span className='ad-info ad-info-text'>{ad.info}</span>
                        <button className='ad-info ad-info-button'>{ad.buttonInfo}</button>
                    </div>
                </div> :
                    <div key={idx} className='alternate-ad-container'>
                        <div style={{ backgroundColor: adInfoColors[idx] }} className='alternate-info-container'>
                            <h2 className='alternate-ad-info ad-info-header'>{ad.header}</h2>
                            <span className='alternate-ad-info ad-info-text'>{ad.info}</span>
                            <button className='alternate-ad-info ad-info-button'>{ad.buttonInfo}</button>
                        </div>
                        <div className='alternate-image-container'>
                            <div className='alternate-ad-image-container'>
                                <img className='alternate-ad-image' src={adImages[idx]} alt='promotional-item' />
                            </div>
                        </div>
                    </div>
            )
            )}
            <div className='non-promotional-ad-container'>
                <div className='non-promotional-info-container'>
                    <h3 className='non-promotional-header'>{nonPromotionalAd[0].header}</h3>
                    <span className='non-promotional-info'>{nonPromotionalAd[0].info}</span>
                    <button className='non-promotional-button'>{nonPromotionalAd[0].buttonInfo}</button>
                </div>
                <div>
                    <div className='non-promotional-image-container'>
                        <img className='non-promotional-image' src={nonPromotionalImage[0]} alt='non-promotional food' />
                    </div>
                </div>
            </div>
        </div>
    );
}


let delta = {
    header: 'Make your Rewards merrier',
    info: 'Starbucks® Rewards + Delta SkyMiles® have come together! Link your accounts to get 1 mile per $1* spent at Starbucks.',
    buttonInfo: 'Link now'
}

let holidayDrink = {
    header: 'Caramel celebration',
    info: 'Our Caramel Brulée Frappuccino® blended beverage is made for holiday happiness.',
    buttonInfo: 'Order now'
}

let holidayPastry = {
    header: 'Sugar-plum joy',
    info: 'Here again, the Sugar Plum Cheese Danish delights with a cream-cheese filling and spiced sugar-plum spread.',
    buttonInfo: 'Order now'
}

let food = {
    header: 'Toasty all the way',
    info: 'The Double-Smoked Bacon, Cheddar & Egg Sandwich is a delicious protein-rich choice.',
    buttonInfo: 'Order now'
}

const ads = [

    delta,
    holidayDrink,
    holidayPastry,
]

const nonPromotionalAd = [
    food
]

const nonPromotionalImage = [
    foodImage
]

const nonPromotionalInfoColor = [
    '#036141'
]

const adImages = [
    deltaImage,
    seasonalDrink,
    seasonalPastry,
]

const adInfoColors = [
    '#1E3832',
    '#D40032',
    '#1E3832',
]
