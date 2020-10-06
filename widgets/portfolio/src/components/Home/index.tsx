import * as React from 'react';
import { ProfileSlider } from '../Carousel';
import { HomePageProps } from './interface';

export class HomePage extends React.Component<HomePageProps, {}> {
    constructor(props: HomePageProps) {
        super(props)
    }

    render() {
        return (
            <div className="col-md-12 text-center mt-5 mb-5" id="home-page">
                <h1 className="title white d-inline-flex">{this.props.title}<span className="d-none d-sm-block ml-2 mr-2"> |</span> Portfolio</h1>
                <div className="hero-container" id="">
                    <picture className="hero-img mb-5">
                        <source media="..." srcSet={this.props.imgSrc} />
                        <img className="rounded-circle border-white" src={this.props.imgSrc} alt="Brian Kilburn" width='250'
                            height='250' />
                    </picture>
                    <h2 className="text-center ">Brian Kilburn</h2>
                </div>
                <div className="mt-5">
                <div className="d-flex" id="background-anim">
                        <div className="purple"></div>
                        <div className="medium-blue"></div>
                        <div className="light-blue"></div>
                        <div className="red"></div>
                        <div className="orange"></div>
                        <div className="yellow"></div>
                        <div className="cyan"></div>
                        <div className="light-green"></div>
                        <div className="lime"></div>
                        <div className="magenta"></div>
                        <div className="lightish-red"></div>
                        <div className="pink"></div>
                    </div> 
                </div>
                <ProfileSlider />
            </div>
        )
    }
}