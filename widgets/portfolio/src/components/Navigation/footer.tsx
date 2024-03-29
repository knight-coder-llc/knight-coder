import * as React from 'react';
import { FooterProps } from './interface';

export class Footer extends React.Component<FooterProps> {
    render() {
        return (    
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <div className="mb-5 flex-center">
                                <a className="fb-ic">
                                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="tw-ic">
                                    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="gplus-ic">
                                    <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="li-ic">
                                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="ins-ic">
                                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="pin-ic">
                                    <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2021 Copyright 
                    <a href="http://knight-coder.com"> Knight Coder LLC.</a>
                </div>
            </footer>
        )
    }
}