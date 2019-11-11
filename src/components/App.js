import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../config/firebase-config';
import Header from './Header';
// import VideoFeed from './VideoFeed';
import VideosContainer from '../containers/videoContainer';
import VideoUpload from './VideoUpload';

class App extends Component {
    constructor() {
        super();

        // initialize firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
            firebase.firestore().settings({ timestampsInSnapshots: true});
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        {/* <Route exact path="/" component={VideoFeed} /> */}
                        <Route exact path="/" component={VideosContainer} />
                        <Route path="/upload" component={VideoUpload} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
