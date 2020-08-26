const state = {
    users: [],
}

export default function reducer(state, action) {
    switch (action.type) {
        case "addUser":
            const user = {}
            return { ...state, users: [...state.users, user]}
            break;
    
        default:
            return state;
    }
}

