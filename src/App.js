import React from "react";
import "./App.css";

// import Container from "./components/Container/blogContainer";    // single post(better be commented)
<<<<<<< HEAD
import Home from "./components/Blogs/BlogWebContainer";
import Profile from './components/Profile/Container/Container'
import BlogPost from './components/BlogPost/BlogPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Container /> */}
      <Switch>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/blogpost">
            <BlogPost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
=======
import Container from "./components/Blogs/BlogWebContainer";
// import Container from './components/Profile/Container/Container'
// import Container from './components/BlogPost/BlogPostContainer'

function App() {
  return (
    <div className="App">
      <Container />
    </div>
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
  );
}

export default App;
