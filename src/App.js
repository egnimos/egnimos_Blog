import React from "react";
import "./App.css";

// import Container from "./components/Container/blogContainer";    // single post(better be commented)
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
  );
}

export default App;
