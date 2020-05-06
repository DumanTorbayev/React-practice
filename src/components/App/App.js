import React from 'react';
import {Route} from "react-router-dom";
import css from './App.module.scss'
import Header from '../Header/Header.jsx';
import Sidebar from "../Sidebar/Sidebar.jsx";
import Profile from "../Profile/Profile.jsx";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";

const App = (props) => {
    return (
        <div className={css.container}>
            <Header/>
            <div className={css.contentWrap}>
                <Sidebar state={props.state.sidebar}/>
                <div className={css.content}>
                    <Route path="/news"
                           component={News}
                    />
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               state={props.state.dialogsPage}
                               dispatch={props.dispatch}
                           />}
                    />
                    <Route path="/music"
                           component={Music}
                    />
                    <Route path="/profile"
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />}
                    />
                    <Route path="/settings"
                           component={Settings}
                    />
                </div>
            </div>
            {/*<footer className={css.footer}>
                <div className={css.footerContainer}>Footer</div>
            </footer>*/}
        </div>
    )
};

export default App