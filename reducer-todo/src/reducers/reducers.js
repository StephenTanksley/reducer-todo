//Need to bring in state and set up our reducer to accept it.css

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Implement reducer into project',
        completed: false,
        id: 3892987590
    },
    {
        item: 'Begin next project to learn Redux',
        completed: false,
        id: 3892987591
    }
]

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state,
                {item: action.payload.item,
                completed: false,
                id: Date.now()}
            ];


        case 'TOGGLE_COMPLETED':
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item;
                }});

        /*What do we need to do to toggle something as completed?
          We need to have an on-click handler which detects if we've
          clicked an element or not. If so, that click should trigger
          a change in the element. */

        case 'CLEAR_COMPLETED':

        return state.filter((item) => 
            !item.completed)

         /*What do we need to re-render our list with only completed elements?
           A filter function will return an array that only fall within certain
           parameters. In this case, we're turning only elements where the 
           'completed' attributes are not true. */


        default:
            return state;
    }
}