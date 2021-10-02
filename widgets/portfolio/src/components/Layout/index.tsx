import * as React from 'react';
import { LayoutProps } from './interface';
import { Header } from '../Header';
import { Navigator } from '../Navigation';
import { Footer } from '../Navigation/footer';
import { AnimatePresence } from 'framer-motion';
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
                    { children }     
                <Footer />
            </>
        )
    }
}