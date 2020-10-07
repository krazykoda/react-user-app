import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import EditForm from "./components/EditForm"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import reducer from "./allReducers";
import firebase from "./firebase/config";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Protected from "./components/Protected"

const store = createStore(reducer, compose(
 applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), 
 reduxReactFirebase(firebase), 
 reduxFirestore(firebase)
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Protected exact path="/" Component={App} />
        <Protected exact path="/edit/:id" component={EditForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

