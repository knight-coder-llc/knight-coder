import * as React from 'react';
import { LayoutProps } from './interface';
import { Navigator } from '../Navigation';

export class Layout extends React.Component<LayoutProps, {}> {
    constructor(props: any) {
        super(props)
    }

    render() {

        let { children } = this.props;
        return (
            <>
            <Navigator links={['Home', 'About', 'Portfolio']} collapsed={false} />
            <div className="grid-layout">
                <div className="line-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center mt-5 mb-5">
                                <h1 >Knight Coder LLC Coming Soon!</h1>
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