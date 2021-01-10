import * as React from 'react';
import Slider  from 'react-slick';
import {CarouselProps} from './interface';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export class ProfileSlider extends React.Component<CarouselProps, {}> {
    render() {
        const settings = {
            className: "center mb-5",
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScrill: 3,
            arrows: false,
            cssEase:'linear',
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                    //   vertical: true,
                    }
                },
                {
                    breakpoint: 494,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    //   vertical: true,
                    }
                }
              ],
        };

        return (
            <div >
                <h2 className="mb-3 mt-4"></h2>
                <Slider {...settings} >
                    <div className="mb-sm-3">
                        <h3><a className="text-white" href="https://react.semantic-ui.com/">Semantic UI React</a></h3>
                        <img className="mx-auto img-responsive" src="../../src/images/semantic-ui-logo.png" width={150} height={150}/>
                    </div>
                    <div className="mb-sm-3">
                        <h3><a className="text-white" href="https://dawnscookies.com/">Dawn's Cookie Community</a></h3>
                        <img className="mx-auto img-responsive" src="../../src/images/cookies.png" width={250} height={150}/>
                    </div>
                    <div className="mb-sm-3">
                        <h3><a className="text-white" href="https://github.com/knight-coder-llc/AI-Vehicle-Calculator">Price Estimator</a></h3>
                        <img className="mx-auto rounded-circle img-responsive" src="../../src/images/ai-cars.png" width={150} height={150}/>
                    </div>
                    <div className="mb-sm-3">
                        <h3><a className="text-white" href="https://github.com/knight-coder-llc/sms-spam-filter">SMS Spam Filter</a></h3>
                        <img className="mx-auto img-responsive" src="../../src/images/open-email.png" width={160} height={150}/>
                    </div>
                    <div className="mb-sm-3">
                        <h3><a className="text-white" href="https://github.com/knight-coder-llc/Meal_Planner">Meal Planner</a></h3>
                        <img className="mx-auto img-responsive" src="../../src/images/porkchops.jpg" width={250} height={150}/>
                    </div>
                    <div className="mb-sm-3">
                        <h3><a className="text-white" href="https://github.com/knight-coder-llc/my_pygame_projects">Deep Space</a></h3>
                        <img className="mx-auto img-responsive" src="../../src/images/pygame_logo.gif" width={250} height={100}/>
                    </div>
                    <div className="mb-sm-3">
                        <h3><a className="text-white" href="https://github.com/knight-coder-llc/knight-coder">Knight Coder Profile</a></h3>
                        <img className="mx-auto img-responsive" src="../../src/images/logo_transparent.png" width={150} height={150}/>
                    </div>
                    
                </Slider>
                <a className="text-white git-profile" href="https://github.com/knight-coder-llc">https://github.com/knight-coder-llc</a>
            </div>
        );
    }
}