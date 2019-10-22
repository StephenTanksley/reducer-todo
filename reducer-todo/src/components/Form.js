import React, {useState, useReducer} from 'react'

// import reducer
import { reducer, initialState } from '../reducers/reducers'

// import list component
import List from '../components/List'

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [newToDo, setNewToDo] = useState({
        item: '',
        completed: false,
        id: Date.now()
    })

    const initialValue = {
        item: '',
        completed: false,
        id: Date.now()
    }

    const handleChange = (e) => {
        setNewToDo({
            ...newToDo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //instead of using a setState function, we're passing this to dispatch.
        dispatch({ type: 'ADD_ITEM', payload: newToDo})
        //we're doing this to reset the form.
        setNewToDo({
            item: '',
            completed: false,
            id: Date.now()
        })
        console.log(state)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="item"
                    placeholder="add new task"
                    value={newToDo.item}
                    onChange={(e) => handleChange(e)}/>

                    <button type="submit">Add item</button>
            </form>

        <button onClick={() => dispatch({ type: "CLEAR_COMPLETED"})}> Clear completed </button>
        
            <div>
                {state.map((item) => 
                    <List 
                        key={item.id} 
                        item={item} 
                        dispatch={dispatch}
                        />
                )}
            </div>
        </div>
    )

}


export default Form