import * as React from 'react';
import { IsoLayout } from '../IsoLayout';
import { ProfileSlider } from '../Carousel';
import { HomePageProps } from './interface';
import { Contact } from '../Contact';
import { ChatBot } from '../Chatbot';
import moneyman from '../../images/holding-money.jpg';
import heartRobot from '../../images/happy.jpg';
import handyman from '../../images/under-construction.jpg';
import superman from '../../images/superhero.jpg';
import brian from '../../images/brian1.jpg';

import { Roll, Flip, Fade, Zoom, Bounce, Rubberband } from 'react-reveal';

import { Container, Row, Col } from 'react-bootstrap';
import BusinessSharpIcon from '@material-ui/icons/BusinessSharp';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';

import upselon from '../../images/upselon.jpg';
import bs from '../../images/bs.jpg';

export class HomePage extends React.Component<HomePageProps, {}> {
    constructor(props: HomePageProps) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Row className="mb-5 mt-5 p-md-5 d-flex align-items-center" >
                    <Col lg={6} className="text-center mt-5 mb-5" id="home-page">
                        
                        <div className="hero-container pt-5" id="">
                            
                                <picture className="hero-img mb-5">
                                    <source media="..." srcSet={brian} />
                                    <Zoom top>
                                        <img className="rounded-circle border-white mb-3" src={brian} alt="Brian Kilburn" width='255' />
                                    </Zoom>
                                </picture>
                            
                        </div>
                        <Contact />
                        <div className="">
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
                    </Col>
                    <Col lg={6} className="text-center ">
                        <h1 className="title white d-inline-flex"><Roll right cascade>{this.props.title}</Roll><span className="d-none d-sm-block ml-2 mr-2"></span></h1>
                        <h2 className="text-center "><Flip bottom>Full Stack Engineer</Flip></h2>
                        <a className="text-white git-profile" href="https://github.com/knight-coder-llc">https://github.com/knight-coder-llc</a>
                    </Col>
                </Row>
               
                    <Row className="mb-5">
                        
                        <Col className="text-center" xs={12} >
                            <h2><Roll right cascade>Dependable</Roll></h2>
                        </Col>
                        
                        <Col lg={6} className="mt-5 d-flex align-items-center" >
                            <Zoom left>
                            <p>
                                Brian Kilburn is a programmer with the skills to provide pragmatic software application solutions for any client to facilitate daily operation, provide autonomy for repetitive tasks, and software that brings in recurring income. The client can focus on more important things such as expanding their business or marketing their product.  
                            </p>
                            </Zoom>
                        </Col>
                        <Col lg={6} className="mt-5 text-center"> 
                            <Fade right>
                                {/* <img src="https://via.placeholder.com/435.png/000/fff C/O https://placeholder.com/ " /> */}
                                <img src={moneyman} width={325} />
                            </Fade>
                        </Col>
                    </Row>
                
                <Row className="mt-5 mb-5"> 
                    <Col xs={12} className="text-center">
                        <h2><Roll left cascade>Committed</Roll></h2>
                    </Col>
                    <Col lg={6} className="mt-5 text-center"> 
                        <Fade left>
                            {/* <img src="https://via.placeholder.com/435.png/000/fff C/O https://placeholder.com/ " /> */}
                            <img src={heartRobot} width={325} />
                        </Fade>
                    </Col>
                    <Col lg={6} className="mt-5"> 
                        <Roll top>
                            <p>
                                After investing seven years earning his degree combined with on the job experience Brian knows how to build a robust application that can bring results, he excels in his ability to learn new technology when it is necessary to accomplish the task at hand, and stands behind the quality of his work. "I have worked super hard to get where I am in my career, and I continue to learn, focusing on ways to improve my skills." 
                            </p>
                        </Roll>
                    </Col>
                </Row>
                
                <Row className="mt-5 mb-5">
                    <Col xs={12} className="text-center">
                        <h2><Roll right cascade>Hard Working</Roll></h2>
                    </Col>
                    <Col lg={6} className="mt-5 ">
                        <Roll bottom> 
                            <p>
                                After investing seven years earning his degree combined with on the job experience Brian knows how to build a robust application that can bring results, he excels in his ability to learn new technology when it is necessary to accomplish the task at hand, and stands behind the quality of his work. "I have worked super hard to get where I am in my career, and I continue to learn, focusing on ways to improve my skills." 
                            </p>
                        </Roll>
                    </Col>
                    <Col lg={6} className="mt-5 text-center"> 
                        <Fade right>
                            {/* <img src="https://via.placeholder.com/435.png/000/fff C/O https://placeholder.com/ " /> */}
                            <img src={handyman} width={225} />
                        </Fade>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5 p-md-5" style={{background: '#007bff', borderRadius: '50px', opacity: '.9'}}>
                    <Col xs={12} className="text-center ">
                        <h2><Roll bottom cascade>Educated and Highly Trained</Roll></h2>
                    </Col>
                    <Col lg={6} className="mt-5 text-center"> 
                        <Fade left>
                            {/* <img src="https://via.placeholder.com/435.png/000/fff C/O https://placeholder.com/ " /> */}
                            <img src={superman} width={225} />
                        </Fade>
                    </Col>
                    <Col lg={6} className="mt-5"> 
                        <Bounce bottom cascade>
                            <p>
                                Brian holds a Bachelor degree in computer science with a minor in informatics from Eastern Kentucky University. He is high honors graduate cum laude, Brian worked hard and excelled during his time in school.
                            </p>
                        </Bounce>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}