import * as React from 'react';
import Slider  from 'react-slick';
import {CarouselProps} from './interface';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export class ProfileSlider extends React.Component<CarouselProps, {}> {
    render() {
        const settings = {
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 700,
            slidesToShow: 3,
            slidesToScrill: 1,
            arrows: false,
        };

        return (
            <div className="col-12 text-center">
                {/* <h2>Single item</h2> */}
                <Slider  {...settings} >
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}