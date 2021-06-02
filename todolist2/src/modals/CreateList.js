import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateList = ({ modal, toggle, save }) => {
    const [listName, setListName] = useState('');



    const handleChange = (val) => {

        const { name, value } = val.target

        if (name === "listName") {
            setListName(value)
        }


    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = listName

        save(taskObj)

    }


    return ( <
        div className = "modalclass" >
        <
        Modal isOpen = { modal }
        toggle = { toggle }
        style = {
            { "color": "white ", "border": "2px solid white", "border-radius": "10px" } } >
        <
        ModalHeader style = {
            { "color": "white ", } }
        toggle = { toggle } > ADD LIST < /ModalHeader>  <
        ModalBody >
        <
        div className = "form-group" >
        <
        label style = {
            { "color": "white " } } > List name < /label>  <
        input type = "text"
        className = "form-control"
        value = { listName }
        onChange = { handleChange }
        name = "listName" / >
        <
        /div>  <
        /ModalBody >  <
        ModalFooter >
        <
        Button color = "primary"
        onClick = { handleSave } > create list < /Button>{' '}  <
        Button color = "secondary"
        onClick = { toggle } > Cancel < /Button>  <
        /ModalFooter >  <
        /Modal>  <
        /div >
    );
}

export default CreateList;