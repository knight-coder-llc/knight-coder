import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Layout } from './components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './master.css';

ReactDom.render(
    <Layout />, document.getElementById('root')
);