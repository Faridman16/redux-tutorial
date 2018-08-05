
const initialState = {
    users:[]
}

export default (state = initialState, action)=> {
    if(action.type === 'FETCH_USER') {
        return {...state, users:action.payload}
    }else if(action.type === 'ADD_USER'){
        return {...state, users:[...state.users, action.payload]}
    }else{
        return state;
    }
}