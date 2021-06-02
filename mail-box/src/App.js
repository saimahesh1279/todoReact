import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import ComposeMail from './components/ComposeMail';
import InboxMail from './components/InboxMail';
import SendMail from './components/SendMail';

import { UserProvider } from './UserContext/UserContext';


function App() {
    return ( <
        UserProvider >
        <
        div className = "app" >
        <
        Router >
        <
        Switch >
        <
        Route exact path = "/inboxmail"
        component = {
            () => < InboxMail / > }
        /> <
        /Switch> <
        Switch >
        <
        Route exact path = "/composemail"
        component = {
            () => < ComposeMail / > }
        />

        <
        /Switch> <
        Switch >
        <
        Route exact path = "/sendmail"
        component = {
            () => < SendMail / > }
        />

        <
        /Switch> <
        /Router> <
        /div> <
        /UserProvider>
    );
}

export default App;