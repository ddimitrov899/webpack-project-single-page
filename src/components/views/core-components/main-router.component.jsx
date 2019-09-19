import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import HomeComponent from "./../home.component";
import MediaComponent from "./../media.component";
import ContactsComponent from "./../contacts.component";
import ArticleViewComponent from "./article/article-view.component";
import ArticleComponent from "./article/article.component";

class MainRouterComponent extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path={'/'} component={HomeComponent}/>
                    <Route exact path={'/articles'} component={ArticleComponent}/>
                    <Route path={'/article/:articleId'} component={ArticleViewComponent}/>
                    <Route path={'/media'} component={MediaComponent}/>
                    <Route path={'/contacts'} component={ContactsComponent}/>
                    <Route to={'/'} component={HomeComponent}/>
                </Switch>
            </main>
        );
    }
}

export default MainRouterComponent;
