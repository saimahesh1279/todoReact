import React from 'react';
import CardList from '../component/CardList'


const Card = ({ taskObj, deleteTask, index }) => {




    const colors = [{
            primaryColor: "#00ffff",

        },
        {
            primaryColor: "#F9D288",

        },
        {
            primaryColor: "#5DC250",

        },
        {
            primaryColor: "#F48687",

        },
        {
            primaryColor: "#B964F7",

        }
    ]




    const handleDelete = () => {
        deleteTask(index)
    }

    return ( <
        div className = "card-wrapper " >
        <
        div className = "card-top"
        style = {
            { "background-color": colors[index % 5].primaryColor } } > < /div> <
        div className = "task-holder" >
        <
        span className = "card-header"
        style = {
            { "background-color": colors[index % 5].primaryColor, "border-radius": "10px" } } > { taskObj.Name } < /span> <
        div style = {
            { "position": "absolute", "right": "5px", "bottom": "5px", "fontSize": "10px" } } >
        <
        i className = "fas fa-trash-alt"
        style = {
            { "color": colors[index % 5].primaryColor, "cursor": "pointer" } }
        onClick = { handleDelete } > < /i> <
        /div> <
        CardList index = { index }
        taskObj = { taskObj }
        />


        <
        /div> <
        /div>

    );
};

export default Card;