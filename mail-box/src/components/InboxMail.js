import React from 'react';
import './InboxMail.css';
import { useHistory } from 'react-router-dom';
import { Route, NavLink, BrowserRouter as Router, Switch, Redirect } from 'react';

const InboxMail = () => {
    let history = useHistory();




    return ( <
        div className = "container-fluid" >
        <
        div className = "row" >
        <
        div className = "col-md-3" >
        <
        div className = "leftcont" >
        <
        button style = {
            { "backgroundColor": "hsl(167deg 100% 37%)", "width": "80%", "paddingRight": "10" } }
        type = "button"
        className = "btn btn-comp"
        onClick = {
            () => { history.push("/composemail") } } > < a style = {
            { "textDecoration": "none", "color": "whitesmoke" } } > ComposeMail < /a></button >
        <
        p className = "Folder text-uppercase" > folder < /p> <
        div className = "folders" >
        <
        ul className = "list-group list-group-flush Folders" >
        <
        li className = "list-group-item " > < i className = "fa fa-inbox  fold" / > < button className = "button"
        onClick = {
            () => { history.push("/inboxmail") } } > Inbox < /button>  < span className="badge bg-success rounded-pill " > 20 </span > < /li > <
        li className = "list-group-item" > < i className = "fa fa-envelope fold" / > < button className = "button"
        onClick = {
            () => { history.push("/sendmail") } } > Send < /button>  </li >
        <
        li className = "list-group-item" > < i className = "fa fa-certificate fold" / > Important < span className = "badge bg-primary rounded-pill " > 10 < /span></li >
        <
        li className = "list-group-item" > < i className = "fa fa-file fold" / > Draft < /li> <
        li className = "list-group-item" > < i className = "fa fa-trash fold" / > Trash < span className = "badge bg-danger rounded-pill " > 14 < /span></li >
        <
        /ul>  <
        /div> <
        br / >
        <
        div >
        <
        p id = "categories" > CATEGARIES < /p>  <
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
        li className = "list-group-item list1" > Film < /li> <
        /ul>  <
        /div>

        <
        /div> <
        /div>  <
        /div> <
        div className = "col-md-9" >
        <
        div className = "midcount" >
        <
        div className = "main" >
        <
        div className = "search" >
        <
        input id = "text"
        type = "text"
        name = "search"
        placeholder = "  Search email" / > < button id = "searchbutton" > Search < /button> <
        /div> <
        h3 className = "head-inb" > Inbox(20) < /h3> <
        ul className = "arrow" >
        <
        div className = "btn-group float-right" >
        <
        button className = "btn btn-white btn-sm" > < i className = "fa fa-arrow-left" / > < /button> <
        button className = "btn btn-white btn-sm" > < i className = "fa fa-arrow-right" / > < /button> <
        /div> <
        /ul> <
        div className = "boxes" >
        <
        p > < button type = "button"
        className = "btn btn-default btn-sm icons1" >
        <
        i className = "fas fa-sync-alt " / > Refresh < /button> < button type="button" className="btn btn-default btn-sm icons1" > <
        i className = "far fa-eye " / >
        <
        /button> < button type="button" className="btn btn-default btn-sm icons1" > < i className="fa fa-exclamation" / > < /button> <
        button type = "button"
        className = "btn btn-default btn-sm icons1" >
        <
        i className = "fas fa-trash" / >
        <
        /button> <
        /p> <
        /div> <
        div align = "center"
        className = "spin-icon" >
        <
        i className = "fa fa-cogs fa-spin" > < /i> <
        /div> <
        /div> <
        div className = "mails" >
        <
        div className = "container" >
        <
        table className = "table table-hover" >
        <
        tbody >
        <
        tr className = "unread" >
        <
        td >
        <
        input className = "check"
        type = "checkbox" / > < /td> <
        td > Mail chip < /td> <
        td > < /td> <
        td > There are Many versions of passengers Loero < /td> <
        td > < /td> <
        td > 5: 10 AM < /td> </tr >
        <
        tr className = "unread" >
        <
        td >
        <
        input className = "check"
        type = "checkbox" / > < /td> <
        td > Mail chip < /td> <
        td > < /td> <
        td > There are Many versions of passengers Loero < /td> <
        td > < /td> <
        td > 5: 10 AM < /td> <
        /tr> <
        tr className = "unread" >
        <
        td >
        <
        input className = "check"
        type = "checkbox" / > < /td> <
        td > Mail chip < /td> <
        td > < /td> <
        td > There are Many versions of passengers Loero < /td> <
        td > < /td> <
        td > 5: 10 AM < /td> <
        /tr> <
        tr className = "unread" >
        <
        td >
        <
        input className = "check"
        type = "checkbox" / > < /td> <
        td > Mail chip < /td> <
        td > < /td> <
        td > There are Many versions of passengers Loero < /td> <
        td > < /td> <
        td > 5: 10 AM < /td> <
        /tr> <
        tr className = "success" >
        <
        td > < input className = "check"
        type = "checkbox" / >
        <
        /td> <
        td > Anna Smith < /td> <
        td > < /td> <
        td > Hello!Greeting From Anna Smith.We sceduled a Meeting with the team < /td> <
        td > < i / > < /td> <
        td > 6: 10 AM < /td > <
        /tr> <
        tr className = "success" >
        <
        td > < input className = "check"
        type = "checkbox" / > < /td> <
        td > Jack Nowak < /td> <
        td > < /td> <
        td > We sceduled a Meeting with the team < /td> <
        td > < /td> <
        td > 6: 10 AM < /td> <
        /tr> <
        tr className = "unread" >
        <
        td >
        <
        input className = "check"
        type = "checkbox" / > < /td> <
        td > Mail chip < /td> <
        td > < /td> <
        td > There are Many versions of passengers Loero < /td> <
        td > < /td> <
        td > 5: 10 AM < /td> </tr >
        <
        tr className = "unread" >
        <
        td > < input className = "check"
        type = "checkbox" / >
        <
        /td> <
        td > Mail chip < /td > <
        td > < /td> <
        td > There are Many versions of passengers Loero < /td> <
        td > < /td> <
        td > 5: 10 AM < /td> <
        /tr> <
        /tbody> <
        /table > <
        div >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>

    );
}

export default InboxMail;