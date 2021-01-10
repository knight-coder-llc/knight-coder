import * as React from 'react';
import {ContactProps} from './interface';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';

export class Contact extends React.Component<ContactProps, {}>  {
    render () {
        return (
            <div className="text-center mb-2 mt-4 ">
                <Button variant="outlined" color="secondary"><EmailIcon color="secondary" fontSize="large" /> Contact</Button>
            </div>
        )
    }
}