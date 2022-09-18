import 'bootstrap/dist/css/bootstrap.min.css'
import CardComponent from './cardComponent';
import CardsComponent from './cardsComponent';
import CarouselComponent from './carouselComponent';
import CreationComponent from './creationComponent';
import FooterComponent from './footerComponent';
import OverlayComponent from './overlayComponent';
import PrinciplesComponent from './principlesComponent';

const Home = () => {
    return ( 
        <div>
            <OverlayComponent />
            <CarouselComponent />
            <CardComponent />
            <strong className='lines'><hr></hr></strong>
            <PrinciplesComponent />
            <strong className='lines'><hr></hr></strong>
            <CardsComponent />
            <strong className='lines'><hr></hr></strong>
            <CreationComponent />
            <strong className='lines'><hr></hr></strong>
            <FooterComponent />
        </div>
     );
}
 
export default Home;