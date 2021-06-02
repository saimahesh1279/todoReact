import React, { useState } from 'react';
import ListName from './ListName';
import Card from './Card';

const TodoList = () => {
        const [listName, setListName] = useState('');
        const [taskList, setTaskList] = useState([]);

        const deleteTask = (index) => {
            let tempList = taskList
            tempList.splice(index, 1)
            localStorage.setItem("taskList", JSON.stringify(tempList))
            setTaskList(tempList)
            window.location.reload()
        }

        const updateListArray = (obj, index) => {
            let tempList = taskList
            tempList[index] = obj
            localStorage.setItem("taskList", JSON.stringify(tempList))
            setTaskList(tempList)
            window.location.reload()
        }

        const saveList = (taskObj) => {
            let tempList = taskList
            tempList.push(taskObj)
            localStorage.setItem("taskList", JSON.stringify(tempList))
            setTaskList(tempList)

        }

        const handleChange = (e) => {
            setListName(e.target.value)

        }

        const handleSave = () => {
            let taskObj = {}
            taskObj["Name"] = ListName
            saveList(taskObj)


        }


        return ( <
                div className = "container-fluid" >
                <
                div className = "header" >
                <
                form >
                <
                div className = "form-group" >

                <
                button onClick = { handleSave } > + < /button> <input type="text" className="listname" name="listName" placeholder= "  add anotherList " value={listName} onChange={handleChange}></input >

                <
                /div> <
                /form> <
                /div> <
                div className = "task-container" >

                {
                    taskList && taskList.map((obj, index) => < Card taskObj = { obj }
                        index = { index }
                        deleteTask = { deleteTask }
                        updateListArray = { updateListArray }
                        /> )} <
                        /div>

                        <
                        /div>
                    );
                }

                export default TodoList;