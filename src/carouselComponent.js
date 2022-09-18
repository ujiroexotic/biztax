import  Carousel  from "react-bootstrap/Carousel";
import Kids1 from './Images/Round.jpg';
import children4 from './Images/Round2.jpg';
import children5 from './Images/Round3.jpg';



const CarouselComponent = () => {
    return (  
        <div>
            <Carousel className="sliderHeight">
                <Carousel.Item className="sliderHeight">
                    <img
                        className="carousel-images"
                        src={Kids1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-words">
                        <h3 className="sliderText">WE'LL <em>TAKE CARE</em> OF IT FOR YOU</h3>
                        <p className="sliderText">YOUR BUSINESS PARTNER.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="sliderHeight">
                    <img
                        className="carousel-images"
                        src={children4}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carousel-words">
                    <h3 className="sliderText">WE'LL <em>TAKE CARE</em> OF IT FOR YOU</h3>
                        <p className="sliderText">YOUR BUSINESS PARTNER.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="sliderHeight">
                    <img
                        className="carousel-images"
                        src={children5}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="carousel-words">
                    <h3 className="sliderText">WE'LL <em>TAKE CARE</em> OF IT FOR YOU</h3>
                        <p className="sliderText">YOUR BUSINESS PARTNER.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
 
export default CarouselComponent;