import React, { useEffect, useState } from 'react';
import CreateList from '../modals/CreateList'
import Card from './Card'

const TodoList = () => {
        const [modal, setModal] = useState(false);
        const [taskList, setTaskList] = useState([]);



        useEffect(() => {
            let arr = localStorage.getItem("taskList")

            if (arr) {
                let obj = JSON.parse(arr)
                setTaskList(obj)
            }
        }, [])


        const toggle = () => {
            setModal(!modal);
        }
        const deleteTask = (index) => {
            let tempList = taskList
            tempList.splice(index, 1)
            localStorage.setItem("taskList", JSON.stringify(tempList))
            setTaskList(tempList)
            window.location.reload()
        }





        const saveTask = (taskObj) => {
            let tempList = taskList
            tempList.push(taskObj)
            localStorage.setItem("taskList", JSON.stringify(tempList))
            setTaskList(taskList)
            setModal(false)
        }
        return ( <
                >


                <
                div className = "listheader text-center" >
                <
                button onClick = {
                    () => setModal(true) } > +add List < /button>  <
                /div>   <
                div className = "task-container" > {
                    taskList && taskList.map((obj, index) => < Card taskObj = { obj }
                        index = { index }
                        deleteTask = { deleteTask }
                        /> )} <
                        /div>  <
                        CreateList toggle = { toggle }
                        modal = { modal }
                        save = { saveTask }
                        /> <
                        />
                    );
                };

                export default TodoList;