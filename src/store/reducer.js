const initialState = {
  users: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "addUser":
      const user = action.payload;
      return { ...state, users: [...state.users, user] };

    default:
      return state;
  }
}
