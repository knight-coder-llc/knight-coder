import * as React from 'react';
import { LayoutProps } from './interface';
import { Header } from '../Header';
import { Navigator } from '../Navigation';
import { Footer } from '../Navigation/footer';
import { Iso } from '@material-ui/icons';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

export class Layout extends React.Component<LayoutProps, {}> {
    constructor(props: any) {
        super(props)
    }

    render() {

        let { children } = this.props;
        return (
            <>
                <Header />
                <Navigator links={['Home', 'About', 'Portfolio']} />
                <div className="grid-layout">
                    <div className="line-item">
                        { children } 
                        <ScrollUpButton style={{ border:  '5px solid darkred', color: 'darkred'}}/> 
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}