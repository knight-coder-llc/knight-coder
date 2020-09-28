import * as React from 'react';
import { HeaderProps } from './interface';
import { Image } from 'react-bootstrap';

import computerImg from '../../images/computer.jpg';

export class Header extends React.Component<HeaderProps, {}> {
    constructor(props: HeaderProps) {
        super(props)

    }

    render() {
        return(
            <header>
                {/* <Image src={computerImg} /> */}
            </header>
        )
    }
}