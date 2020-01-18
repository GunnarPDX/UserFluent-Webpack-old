import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import PostIndex from './views/posts/PostIndex';
import NewPost from './views/posts/NewPost';
import About from './views/static/About';
import ProfileSettings from "./views/user/ProfileSettings";
import NavigationUpper from "./components/navigation/NavigationUpper";
import ShowPost from "./views/posts/ShowPost"
import ShowProfile from "./views/user/ShowProfile";

import './App.scss';


function App() {
    return (
        <Router>
            <div className="App">

                <NavigationUpper />

                <Route exact path="/" component={PostIndex} />
                <Route exact path="/posts/new" component={NewPost} />
                <Route exact path="/about" component={About} />
                <Route exact path="/profile/settings" component={ProfileSettings}/>
                <Route exact path="/show/post/:id" component={ShowPost} />
                <Route exact path="/show/userprofile/:id" component={ShowProfile} />

                <div className={'content-spacer'}/>

            </div>
        </Router>
    );
}

export default App;