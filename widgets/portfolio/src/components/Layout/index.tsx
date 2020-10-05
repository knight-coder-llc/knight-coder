import * as React from 'react';

import { LayoutProps } from './interface';
import { Header } from '../Header';
import { Navigator } from '../Navigation';
import { Footer } from '../Navigation/footer';

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
                        <div className="container">
                            <div className="row">
                                { children }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}