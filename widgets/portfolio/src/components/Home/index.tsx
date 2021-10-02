import * as React from 'react';
import { ProfileSlider } from '../Carousel';
import { HomePageProps } from './interface';
import { Contact } from '../Contact';
import { ChatBot } from '../Chatbot';
import { Container, Row, Col } from 'react-bootstrap';
export class HomePage extends React.Component<HomePageProps, {}> {
    constructor(props: HomePageProps) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Row className="mb-5 mt-5 d-flex align-items-center" >
                    <Col lg={6} className="text-center mt-5 mb-5" id="home-page">
                        
                        <div className="hero-container" id="">
                            <picture className="hero-img mb-5">
                                <source media="..." srcSet={this.props.imgSrc} />
                                <img className="rounded-circle border-white mb-3" src={this.props.imgSrc} alt="Brian Kilburn" width='250'
                                    height='250' />
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
                        <h1 className="title white d-inline-flex">{this.props.title}<span className="d-none d-sm-block ml-2 mr-2"></span></h1>
                        <h2 className="text-center ">Full Stack Engineer</h2>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col className="text-center" xs={12} >
                        <h2>Dependable</h2>
                    </Col>
                    <Col lg={6} className="mt-5 d-flex align-items-center" >  
                        <p>
                            Brian Kilburn is a programmer with the skills to provide pragmatic software application solutions for any client to facilitate daily operation, provide autonomy for repetitive tasks, and software that brings in recurring income, so the client can focus on more important things such as expanding their business or marketing their product.  
                        </p>
                    </Col>
                    <Col lg={6} className="mt-5 text-center"> 
                        <img src="https://via.placeholder.com/435.png/000/fff C/O https://placeholder.com/ " />
                    </Col>
                </Row>
                <Row className="mt-5 mb-5"> 
                    <Col xs={12} className="text-center">
                        <h2>Committed</h2>
                    </Col>
                    <Col lg={6} className="mt-5 text-center"> 
                        <img src="https://via.placeholder.com/435.png/000/fff C/O https://placeholder.com/ " />
                    </Col>
                    <Col lg={6} className="mt-5"> 
                        After investing seven years earning his degree combined with on the job experience Brian knows how to build a robust application that can bring results, he excels in his ability to learn new technology when it is necessary to accomplish the task at hand, and stands behind the quality of his work. "I have worked super hard to get where I am in my career, and I continue to learn, focusing on ways to improve my skills." 
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col xs={12} className="text-center">
                        <h2>Hard Working</h2>
                    </Col>
                    <Col lg={6} className="mt-5 "> 
                        After investing seven years earning his degree combined with on the job experience Brian knows how to build a robust application that can bring results, he excels in his ability to learn new technology when it is necessary to accomplish the task at hand, and stands behind the quality of his work. "I have worked super hard to get where I am in my career, and I continue to learn, focusing on ways to improve my skills." 
                    </Col>
                    <Col lg={6} className="mt-5 text-center"> 
                        <img src="https://via.placeholder.com/435.png/000/fff C/O https://placeholder.com/ " />
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col xs={12} className="text-center ">
                        <h2>Educated and Highly Trained</h2>
                    </Col>
                    <Col lg={6} className="mt-5 text-center"> 
                        <img src="https://via.placeholder.com/435.png/000/fff C/O https://placeholder.com/ " />
                    </Col>
                    <Col lg={6} className="mt-5"> 
                        Brian holds a Bachelor degree in computer science with a minor in informatics from Eastern Kentucky University.
                    </Col>
                </Row>
            </Container>
        )
    }
}