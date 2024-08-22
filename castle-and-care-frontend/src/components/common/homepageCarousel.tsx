import React from 'react';
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';
import NgoImage from '../../images/ngo3.jpeg' //
import ReliefPoverty from '../../images/hero.jpg';
import Volunteer from '../../images/ngo1.jpeg';
import '@coreui/coreui/dist/css/coreui.min.css';
import '../../styles/common/homepagecarousel.css'


const HomepageCarousel = () => {
    return (
        <div className="carousel-container">
            <CCarousel controls indicators transition="crossfade">
                <CCarouselItem>
                    <CImage className="custom-carousel-image" src={NgoImage} alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                        <div className="semi-transparent-carousel-text">
                            <h5>Community Support in Action</h5>
                            <p>Dedicated volunteers work together to prepare essential aid packages, ensuring that
                                necessary supplies reach those in need. </p>
                        </div>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="custom-carousel-image" src={ReliefPoverty} alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                        <div className="semi-transparent-carousel-text">
                            <h5>Breaking Myths, Building Futures</h5>
                            <p>Young girls participate in an educational session focused on breaking menstrual health
                                myths.</p>
                        </div>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="custom-carousel-image" src={Volunteer} alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                        <div className="semi-transparent-carousel-text">
                            <h5>Keeping Our Community Clean</h5>
                            <p>Volunteers come together to clean up their neighborhood. </p>
                        </div>
                    </CCarouselCaption>
                </CCarouselItem>
            </CCarousel>
        </div>
    );
};

export default HomepageCarousel;
