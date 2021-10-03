import * as React from 'react';
import { ProfileSlider } from '../Carousel';
import { HomePageProps } from './interface';
import { Contact } from '../Contact';
import { ChatBot } from '../Chatbot';
import { motion } from 'framer-motion';
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
                        
                        <motion.div 
                            key="brians-img"
                            className="hero-container" 
                            id=""
                            initial={{
                                x: '-100vw',
                            }}
                            animate={{
                                x: 0
                            }}
                            transition={{
                                duration: 1.5
                            }}
                        >
                            <picture className="hero-img mb-5" >
                                <source media="..." srcSet={this.props.imgSrc} />
                                <img className="rounded-circle mb-3 mt-md-5" src={this.props.imgSrc} alt="Brian Kilburn" width='350'
                                    height='350' style={{border: '4px solid #f50057'}}/>
                            </picture>
                            <Contact />
                        </motion.div>
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
                        <h1 className="white d-inline-flex" >
                            <motion.span 
                                key="brians-name-sp"
                                initial={{
                                    x: '100vw',
                                    opacity: 0
                                }}
                                animate={{
                                    x: '0vw',
                                    opacity: 1,
                                }}
                                transition={{duration: 1.5}}
                                >{this.props.title}</motion.span>
                        </h1>
                        <h2 className="text-center ">
                            <motion.div 
                                key={`brians-profession`}
                                initial={{
                                   opacity: 0 
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: [1, 2, 2, 1, 1],
                                }}
                                transition={{delay: 1, duration: 1.5}}
                                >
                                    Full Stack Engineer
                            </motion.div>
                        </h2>
                    </Col>
                </Row>
                <Row className="mb-5 p-md-5" style={{background: 'crimson', borderRadius: '50px', opacity: '.9'}}> 
                    <span className="text-left"><HighlightOffSharpIcon fontSize="large"/></span>
                    <Col className="text-center" xs={12} >
                            <h2 className="d-inline-flex"><BusinessSharpIcon className="mr-2" fontSize="large" /> Dependable</h2>
                    </Col>
                    <Col lg={6} className="mt-5 d-flex align-items-center" >  
                        <span>
                            Brian Kilburn is a programmer with the skills to provide pragmatic software application solutions for any client to facilitate daily operation, provide autonomy for repetitive tasks, and software that brings in recurring income, so the client can focus on more important things such as expanding their business or marketing their product.  
                        </span>
                    </Col>
                    <Col lg={6} className="mt-5 text-center"> 
                        <img src="https://via.placeholder.com/435.png/000/fff C/O https://placeholder.com/ " />
                    </Col>
                </Row>
                <Row className="mt-5 mb-5 p-md-5" style={{background: 'purple', borderRadius: '50px', opacity: '.9'}}> 
                    <Col xs={12} className="text-center">
                        <h2>Committed</h2>
                    </Col>
                    <Col lg={6} className="mt-5 text-center"> 
                        <img src="https://via.placeholder.com/435.png/000/fff C/O https://placeholder.com/ " />
                    </Col>
                    <Col lg={6} className="mt-5 d-flex align-items-center"> 
                        <span>Brian knows how to build a robust application that can bring results, he excels in his ability to learn new technology when it is necessary to accomplish the task at hand, and stands behind the quality of his work.</span>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5 p-md-5" style={{background: 'green', borderRadius: '50px', opacity: '.9'}}>
                    <Col xs={12} className="text-center">
                        <h2>Hard Working</h2>
                    </Col>
                    <Col lg={6} className="mt-5 d-flex align-items-center"> 
                        <blockquote style={{color: 'black', borderRadius: '50px'}}>"I have worked super hard to get where I am in my career, and I continue to learn, focusing on ways to improve my skills."</blockquote> 
                    </Col>
                    <Col lg={6} className="mt-5 text-center"> 
                        <img src={upselon} width={435} height={435}/>
                        {/* <img src="https://via.placeholder.com/435.png/000/fff C/O https://placeholder.com/ " /> */}
                    </Col>
                </Row>
                <Row className="mt-5 mb-5 p-md-5" style={{background: '#007bff', borderRadius: '50px', opacity: '.9'}}>
                    <Col xs={12} className="text-center ">
                        <h2>Educated and Highly Trained</h2>
                    </Col>
                    <Col lg={6} className="mt-5 text-center"> 
                    <img src={bs} width={435} height={435}/>
                    </Col>
                    <Col lg={6} className="mt-5 d-flex align-items-center"> 
                        <span>Brian holds a Bachelor degree in computer science with a minor in informatics from Eastern Kentucky University.</span>
                    </Col>
                </Row>
            </Container>
        )
    }
}