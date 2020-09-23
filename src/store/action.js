const action = (type, payload = {}) => {
  return (dispatch, state, { getFirestore }) => {

    // Add a new document with a generated id to firestore.
    getFirestore()
      .collection("users")
      .add(payload)
      .then(() => {
        //dispatch to update the state
        dispatch({
          type: type,
          payload: payload,
        })
      })
      .catch(err => console.log(err))
    } 
};

export const addUser = (data) => action("addUser", data);
export const editUser = (data) => action("editUser", data);
export const deleteUser = (data) => action("deleteUser", data);

export default action;
