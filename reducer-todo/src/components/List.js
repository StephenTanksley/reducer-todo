import React from 'react'

//Displays a list of the to-do items from state.css

const List = (props) => {
    return (
        <div>
            className={`item${props.item.completed ? " completed" : ""}`}
            
            <p>{props.item.item}</p>

        </div>
    )
}