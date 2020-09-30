const action = (type, payload = {}) => {
  switch (type) {
    case "addUser":
      return (dispatch, state, { getFirestore }) => {
        // Add a new document with a generated id to firestore.
        getFirestore()
        .collection("users")
        .doc(payload.id)
        .set(payload)
        .then(() => {})
        .catch(err => console.log(err))
      };
    
    case "deleteUser":
      return (dispatch, state, { getFirestore }) => {
        getFirestore()
        .collection("users")
        .doc(payload)
        .delete()
        .then(() => {})
        .catch(err => {})
      }
  
    default:
      break;
  }
  return (dispatch, state, { getFirestore }) => {
    // Add a new document with a generated id to firestore.
    getFirestore()
      .collection("users")
      .add(payload)
      .then(() => {
        //dispatch to update the state
        dispatch({type, payload})
      })
      .catch(err => console.log(err))
    } 
};


//Get all users from firstore
export const getUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users").orderBy("name", "asc")
      .onSnapshot( (snapshop) => {
        const users = [];
        snapshop.forEach((doc) => users.push(doc.data()));
        dispatch({
          type:"allUsers",
          payload: users
        })

      }, (err) => {
        console.log(err)
      })
  }
}



export default action;
