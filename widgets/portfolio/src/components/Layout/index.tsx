import * as React from 'react';

import { LayoutProps } from './interface';
import { Header } from '../Header';
import { Navigator } from '../Navigation';

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
                            <div className="col-md-12 text-center mt-5 mb-5">
                                <h1 className="title white">Knight Coder LLC | Portfolio</h1>
                            </div>
                            <div className="col-md-12 text-center">
                                { children }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}