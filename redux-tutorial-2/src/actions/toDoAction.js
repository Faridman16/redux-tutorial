var id = 0
export const addTodo = (text)=>(
    {
        type:'ADD_TODO',
        id:id++,
        toDo:text,
    }
)


export const deleteToDo = ()=>{

}

export const clearToDo = ()=>{

}