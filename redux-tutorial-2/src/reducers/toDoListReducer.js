
const toDos = (state = [], action)=>{
    if(action.type === 'ADD_TODO'){
        return [...state, 
            {
                id:action.id,
                text:action.text,
                priority:action.priority,
            }
        ]
    }else{
        return state
    }
}

export default toDos