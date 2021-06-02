import React from 'react';
import ListItems from './ListItems';
class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    delete(index) {

    }


    handleInput(e) {
        this.setState({
                currentItem: {
                    text: e.target.value,
                    key: Date.now()
                }
            })
            // console.log(this.state.currentItem);
    }

    addItem(e) {
        e.preventDefault();
        const newItem = this.state.items;
        newItem.push(this.state.currentItem["text"])
            // console.log(newItem, this.state.currentItem)
        this.setState({
            items: newItem,
            currentItem: {
                text: "",
                key: ""
            }
        })

        console.log(this.state.items)
    }


    render() {
        return ( < div >

            <
            form id = "card-from" >
            <
            div className = "input-group mt-3" >
            <
            input type = "text"
            className = "form-control"
            placeholder = "cardname"
            value = { this.state.currentItem.text }
            onChange = { this.handleInput }
            />   <
            button className = "btn btn-outline-secondary"
            type = "button"
            id = "button-addon2"
            onClick = { this.addItem } > add Card < /button>

            <
            /div>   <
            /form >  <
            ListItems items = { this.state.items }
            delete = { this.delete }
            />

            <
            /div>
        )
    }
}

export default CardList;