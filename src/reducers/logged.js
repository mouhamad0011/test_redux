const loggedReducer = (state = false, action)=>{
    switch (action.type) {
        case "signIn":
            return !state;
            default: 
             return state;
    }
}
export default loggedReducer;