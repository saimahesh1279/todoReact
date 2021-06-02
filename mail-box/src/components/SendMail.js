import React, { useContext } from 'react';
import { UserContext } from "../UserContext/UserContext";
import './SendMail.css';

import { Container, Button, ListGroup, Table, Badge, ListGroupItemHeading, ListGroupItem, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router';

const SendMail = () => {
    const [users, setUser] = useContext(UserContext);

    let history = useHistory();
    return (

        <
        Container fluid >


        <
        Row >
        <
        Col md = "3"
        className = "left" >
        <
        Button onClick = {
            () => { history.push("/composemail") } }
        color = "success"
        className = "ComposeButton"
        size = "md" > Compose Mail < /Button> <
        ListGroup flush className = "FolderList" >
        <
        ListGroupItemHeading className = "Folder" > Folder < /ListGroupItemHeading> <
        button className = "rute"
        onClick = {
            () => { history.push("/inboxmail") } } > < ListGroupItem > < i class = "fa fa-inbox fold" > < /i>Inbox<Badge color="warning">14</Badge > < /ListGroupItem></button >
        <
        button className = "rute"
        onClick = {
            () => { history.push("/sendmail") } } > < ListGroupItem > < i class = "fa fa-envelope fold" > < /i> Sent Mail</ListGroupItem > < /button>  <
        ListGroupItem > < i class = "fa fa-bookmark fold" > < /i> Important</ListGroupItem >
        <
        ListGroupItem > < i class = " fa fa-external fold" > < /i> Drafts  <Badge color="danger">14</Badge > < /ListGroupItem> <
        ListGroupItem > < i class = " fa fa-trash fold" > < /i> Trash</ListGroupItem >
        <
        /ListGroup> <
        ListGroup >
        <
        ListGroupItemHeading className = "category" > Categories < /ListGroupItemHeading> <
        ListGroupItem className = "justify-content-between cat" > < i class = "fa fa-circle text-success" > < /i>Work</ListGroupItem >
        <
        ListGroupItem className = "justify-content-between cat" > < i class = "fa fa-circle text-danger" > < /i>Documents</ListGroupItem >
        <
        ListGroupItem className = "justify-content-between cat" > < i class = "fa fa-circle text-dark" > < /i> Social</ListGroupItem >
        <
        ListGroupItem className = "justify-content-between cat" > < i class = "fa fa-circle text-info" > < /i>
        Advertising < /ListGroupItem> <
        ListGroupItem className = "justify-content-between cat" > < i class = "fa fa-circle text-warning" > < /i>
        Clients < /ListGroupItem> <
        /ListGroup> <
        ListGroup className = "labels" >
        <
        ListGroupItemHeading className = "text-left label" > Labels < /ListGroupItemHeading>

        <
        ListGroup horizontal >
        <
        ListGroupItem className = "justify-content-between lab"
        color = "dark" > < i class = "fa fa-tag" > < /i> Family</ListGroupItem >
        <
        ListGroupItem className = "justify-content-between lab"
        color = "dark" > < i class = "fa fa-tag" > < /i> Work</ListGroupItem >
        <
        ListGroupItem className = "justify-content-between lab"
        color = "dark" > < i class = "fa fa-tag" > < /i> Home</ListGroupItem >
        <
        /ListGroup> <
        ListGroup horizontal >
        <
        ListGroupItem className = "justify-content-between lab"
        color = "dark" > < i class = "fa fa-tag" > < /i> Children</ListGroupItem >
        <
        ListGroupItem className = "justify-content-between lab"
        color = "dark" > < i class = "fa fa-tag" > < /i> Holidays</ListGroupItem >
        <
        ListGroupItem className = "justify-content-between lab"
        color = "dark" > < i class = "fa fa-tag" > < /i> Music</ListGroupItem >
        <
        /ListGroup> <
        ListGroup horizontal >
        <
        ListGroupItem className = "justify-content-between lab"
        color = "dark" > < i class = "fa fa-tag" > < /i> Photography</ListGroupItem >
        <
        ListGroupItem className = "justify-content-between lab"
        color = "dark" > < i class = "fa fa-tag" > < /i> Film</ListGroupItem >
        <
        /ListGroup> <
        /ListGroup> <
        /Col> <
        Col md = "9"
        className = "right" >
        <
        h3 style = {
            { "opacity": "0.7", "fontFamily": "open Sans, sans-serif ", "marginTop": "30px" } } > Send Mail < /h3> <
        form class = "pull-right position"
        action = "#" >
        <
        div className = "input-append" >
        <
        input className = "searchinput"
        type = "text"
        placeholder = "      Search Mail" / >
        <
        Button > Search < /Button> <
        /div> <
        /form> <
        Table >
        <
        thead >
        <
        tr >
        <
        th > < i class = "fa fa-refresh btnn" > Refresh < /i> <i class="fa fa-eye btnn"></i > < i class = "fa fa-exclamation btnn" > < /i> <i class="fa fa-trash btnn"></i > < /th> <
        th > < /th> <
        th > < /th> <
        th classname = "btn-arrow" > < i class = "fa fa-arrow-left btnn-arr" > < /i><i class="fa fa-arrow-right btnn-arr"></i > < /th> <
        /tr> <
        /thead> <
        /Table> <
        Table >
        <
        thead >

        <
        /thead> <
        tbody > {
            users.map((user) => ( <
                tr >
                <
                td > < input type = "checkbox" / > < /td> <
                td > { user.name } < /td> <
                td > { user.message } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /Table>

        <
        /Col> <
        /Row> <
        /Container>
    );
}

export default SendMail;