import React from 'react';
import './ListItems.css';

function ListItems(props) {



    return ( <
        div > {
            props.items.map((value, index) => {
                return ( <
                    div className = "cards" > < span id = "printValues" > { value } < /span>  <
                    div >
                    <
                    i className = "fas fa-trash-alt"
                    style = {
                        { "margin-top": "10px", "color": "white", "fontSize": "10px", "position": "absolute", "right": "5px", } } > < /i> <
                    /div></div > );
            })
        } < /div>
    )
}
export default ListItems;