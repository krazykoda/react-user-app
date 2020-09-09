const initialState = {
  users: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "addUser":
      const user = action.payload;
      return { ...state, users: [...state.users, user] };

    case "deleteUser":
      const newUsers = state.users.filter(user => user.id !== action.payload)
      return { ...state, users: newUsers }

    case "editUser":
      const updatedUsers = state.users.map(user => {
        if(user.id === action.payload.id) {
          return action.payload;
        }else {
          return user
        }
      })
      
      return { ...state, users: updatedUsers };
      
    default:
      return state;
  }
}
