import * as React from 'react';
import { ChatBotProps } from './interface';
//@ts-ignore
import MessengerCustomerChat from 'react-messenger-customer-chat'; 

export class ChatBot extends React.Component<ChatBotProps, {}> {
    render() {
        return (
            <MessengerCustomerChat pageID={this.props.pid} appID={this.props.aid}/>
        )
    }
}