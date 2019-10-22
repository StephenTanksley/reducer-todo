import React from 'react'

//Displays a list of the to-do items from state. Pretty unashamedly borrowing
//code from the class components to-do assignment.

const List = (props) => {
    console.log(props)
    return (
        <div
            className={`item${props.item.completed ? " completed" : ""}`}
            onClick={() => props.dispatch({ 
                type: "TOGGLE_COMPLETED", 
                payload: props.item})}>
                        
            <p>{props.item.item}</p>
        </div>
    )
}

export default List