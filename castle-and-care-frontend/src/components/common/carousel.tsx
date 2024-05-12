import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import Image1 from '../../images/ngo1.jpeg';
import Image2 from '../../images/ngo2.jpeg';
import Image3 from '../../images/ngo3.jpeg';

const MyCarousel = () => {
    return (
        <CCarousel controls indicators>
            <CCarouselItem>
                <CImage className="d-block w-100" src={Image1} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={Image2} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={Image3} alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
    );
};

export default MyCarousel;
