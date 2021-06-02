import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import './ComposeMail.css';
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";


const ComposeMail = () => {








    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const [users, setUser] = useContext(UserContext);




    const updateName = (e) => {
        setName(e.target.value);
    };

    const updateMessage = (e) => {
        setMessage(e.target.value);
    };

    const addUser = (e) => {


        setUser([{ name: name, message: message }, ...users])
        console.log(users);
        return <Redirect to = "/sendmail/" / >
    }
    let history = useHistory();

    return (

        <
        div className = "row" >
        <
        div className = "col-md-3" >
        <
        div className = "leftcont" >
        <
        button style = {
            { backgroundColor: 'hsl(167deg 100% 37%)', width: '80%', paddingRight: 10, margin: '20px 0 0 20px' } }
        type = "button"
        className = "btn btn-comp" > < a style = {
            { "textDecoration": "none", "color": "whitesmoke" } } > ComposeMail < /a></button >
        <
        p className = "Folder text-uppercase" > folder < /p> <
        div className = "folders" >
        <
        ul className = "list-group list-group-flush Folders" >
        <
        li className = "list-group-item " > < i className = "fa fa-inbox  fold" / > < button className = "button"
        onClick = {
            () => { history.push("/inboxmail") } } > Inbox < /button> < span className="badge bg-success rounded-pill " > 20 </span > < /li > <
        li className = "list-group-item" > < i className = "fa fa-envelope fold" / > < button className = "button"
        onClick = {
            () => { history.push("/inboxmail") } } > Send < /button> </li > <
        li className = "list-group-item" > < i className = "fa fa-certificate fold" / > Important < span className = "badge bg-primary rounded-pill " > 10 < /span></li >
        <
        li className = "list-group-item" > < i className = "fa fa-file fold" / > Draft < /li> <
        li className = "list-group-item" > < i className = "fa fa-trash fold" / > Trash < span className = "badge bg-danger rounded-pill " > 14 < /span></li >
        <
        /ul> <
        /div> <
        br / >
        <
        div >
        <
        p id = "categories" > CATEGARIES < /p> <
        div className = "categories" >
        <
        ul className = "list-group list-group-flush" >
        <
        li className = "list-group-item cat" > < div id = "green" > < /div>  Work</li >
        <
        li className = "list-group-item cat" > < div id = "red" > < /div>  Documents</li >
        <
        li className = "list-group-item cat" > < div id = "brown" > < /div>  Social</li >
        <
        li className = "list-group-item cat" > < div id = "blue" > < /div>  Advertising</li >
        <
        li className = "list-group-item cat" > < div id = "yellow" > < /div>  Clients</li >
        <
        /ul>


        <
        /div> <
        /div> <
        div className = "labels" >
        <
        p id = "labels" > LABELS < /p> <
        div className = "list" >
        <
        ul className = "list-group list-group-horizontal label" >
        <
        li className = "list-group-item list1" > < i className = "fa fa-tag" / > Family < /li> <
        li className = "list-group-item list1" > < i className = "fa fa-tag" / > Work < /li> <
        li className = "list-group-item list1" > < i className = "fa fa-tag" / > Home < /li> <
        /ul> <
        ul className = "list-group list-group-horizontal-sm label2" >
        <
        li className = "list-group-item list1" > < i className = "fa fa-tag" / > Childer < /li> <
        li className = "list-group-item list1" > < i className = "fa fa-tag" / > Holidays < /li> <
        li className = "list-group-item list1" > < i className = "fa fa-tag" / > Music < /li> <
        /ul> <
        ul className = "list-group list-group-horizontal-md label2" >
        <
        li className = "list-group-item list1" > < i className = "fa fa-tag" / > Photography < /li> <
        li className = "list-group-item list1" > < i className = "fa fa-tag" / > Film < /li>

        <
        /ul> <
        /div>

        <
        /div> </div > < /div> <div className="col-md-9" > <
        div className = "main" >
        <
        div className = "topright" >
        <
        div className = "col" >
        <
        a id = "draft" > < span className = "glyphicon glyphicon-pencil" / > Draft < /a> <
        /div> <
        div className = "col" >
        <
        span / >
        <
        a id = "discard" > < span className = "glyphicon glyphicon-remove" / > Discard < /a> <
        /div> <
        /div> <
        div className = "top" >
        <
        div id = "ComposeMail" >
        <
        a > Compose mail < /a> <
        /div> <
        /div> <
        div align = "center"
        className = "spin-icon" >
        <
        i className = "fa fa-cogs fa-spin" > < /i> <
        /div> <
        div className = "sendmail" >
        <
        Form >
        <
        Form.Group >
        <
        Form.Label > Name < /Form.Label> <
        Form.Control type = "text"
        name = "name"
        value = { name }
        onChange = { updateName }
        placeholder = "Enter Name" / >
        <
        /Form.Group> <
        Form.Group >
        <
        Form.Label > Message < /Form.Label> <
        Form.Control type = "text"
        name = "message"
        value = { message }
        onChange = { updateMessage }
        placeholder = "Enter Message" / >
        <
        /Form.Group> <
        hr / >
        <
        div className = "container-fluid " >
        <
        div className = "tool " >
        <
        ul >
        <
        li className = "fa fa-magic " / >
        <
        li className = "fa fa-bold " / >
        <
        li className = "fa fa-underline " / >

        <
        li className = "fa fa-eraser " / >
        <
        li className = "fa fa-font " / >
        <
        li className = "fa fa-list-ul " / >
        <
        li className = "fa fa-list-ol " / >
        <
        li className = "fa fa-indent " / >
        <
        li className = "fa fa-table " / >
        <
        li className = "fa fa-link " / >
        <
        li className = "fa fa-photo " / >
        <
        li className = "fa fa-video-camera " / >
        <
        li className = "fa fa-arrows-alt" / >
        <
        li className = "fa fa-code " / >
        <
        li className = "fa fa-question " / >
        <
        /ul> <
        /div> <
        /div> <
        div style = {
            { height: '28%', width: '100%', borderBottom: '1px solid #e7eaec' } }
        className = "message " >
        <
        textarea id = "textarea"
        name = "content "
        rows = { 8 }
        columns = { 200 }
        defaultValue = { "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum " }
        /> <
        /div> <
        div style = {
            { height: '2%', width: '100%', backgroundColor: '#e7eaec' } }
        className = "scroll " > < /div> <
        div style = {
            { borderBottom: '1px solid #e7eaec', height: '12%', width: '100%' } }
        className = "send " >
        <
        div className = "mail-body text-right tooltip-demo " >
        <
        Link to = "/sendmail" > < Button style = {
            { "backgroundColor": "#00bf96" } }
        onClick = { addUser }
        className = "action_btn"
        variant = "primary"
        type = "submit" > Send < /Button> </Link >
        <
        a className = "btn btn-white btn-sm " > < i className = "fa fa-times " / > Discard < /a> <
        a className = "btn btn-white btn-sm  " > < i className = "fa fa-pencil " / > Draft < /a> <
        /div> <
        /div> <
        /Form> <
        /div> <
        div style = {
            { backgroundColor: '#e7eaec', height: '20%', width: '100%', borderBottom: '1px solid white' } } >
        <
        /div> </div > < /div>

        <
        /div>

    );
}

export default ComposeMail;