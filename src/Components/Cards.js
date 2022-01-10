import CardItem from './CardItem';
import './Cards.scss';

function Cards() {
    return (
        <div className="cards">
            <h1> Bekijk deze populaire bestemmingen!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='images/img-9.jpg' 
                            text='Bezoek de verborgen waterval diep in het Amazonegebied'
                            label='Avontuur'
                            path='/services'
                        />
                        <CardItem src='images/img-2.jpg'
                            text='Vaar langs de eilanden van Bali met een Cruise'
                            label='Cruise'
                            path='/services'
                        />
                        <CardItem src='images/img-1.jpg'
                            text='Ga op avontuur en bezoek de schitterende bergen van Nieuw Zeeland'
                            label='Avontuur'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards