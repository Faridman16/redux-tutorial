
export const fetchUser = () => (dispatch) => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res=> res.json())
    .then(users=>dispatch({
        type:'FETCH_USER',
        payload:users.results.map(res=>{
            return {
                photo:res.picture.thumbnail,
                name:res.name.title+'. '+ res.name.first+ ' '+ res.name.last,
                address:res.location.street + ', '+ res.location.city,
                email:res.email,
            }
        })
    }))
}

export const createUser = (submitObj) => (dispatch) => (
    dispatch({
        type:'ADD_USER',
        payload:submitObj,
    })
)