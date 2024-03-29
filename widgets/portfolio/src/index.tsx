import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './master.css';
import './style.css';

ReactDom.render(
        <BrowserRouter >
            <Layout>
                <Switch>
                    <Route exact path="/" >
                        <HomePage title='Brian Kilburn' imgSrc="../src/images/brian1.jpg" />
                    </Route>
                    <Route path="/features" >
                        {/* <h1 >featured page</h1> */}
                    </Route>
                    <Route path="/pricing" >
                        {/* <h1 >featured page</h1> */}
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    , document.getElementById('root')
);