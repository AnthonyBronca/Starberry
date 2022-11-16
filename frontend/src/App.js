import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
// import Navigation from "./components/Navigation";
// import TweetFeed from "./components/TweetFeed/TweetFeed";
// import ProtectedRoute from "./components/Auth/ProtectedRoute";
// import OneTweet from "./components/OneTweet/OneTweet";
// import SideBar from "./components/HomePageSideBar/SideBar";
// import Splash from "./components/Splash/splash";
// import EditTweetForm from "./components/EditTweetForm/EditTweetForm";
// import EditCommentForm from "./components/EditCommentForm/EditCommentForm";
import LoginForm from "./components/LoginFormModal/LoginForm";
import HomePage from "./components/Home/HomePage";


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user)
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <Switch>
      <Route path='/' exact={true} >
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
    </Switch>
  );
}

export default App;
