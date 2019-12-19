import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import HomeComponent from "./../home.component";
import AboutComponent from "./../about.component";
import MediaComponent from "./../media.component";
import BookingComponent from "./../booking.component";
import ContactsComponent from "./../contacts.component";
import ArticleViewComponent from "./article/article-view.component";
import ArticleComponent from "./article/article.component";

class MainRouterComponent extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path={'/'} component={HomeComponent}/>
                    <Route exact path={'/about'} component={AboutComponent}/>
                    <Route exact path={'/articles'} component={ArticleComponent}/>
                    <Route path={'/article/:articleId'} component={ArticleViewComponent}/>
                    <Route path={'/colections'} component={MediaComponent}/>
                    <Route path={'/booking'} component={BookingComponent}/>
                    <Route path={'/contacts'} component={ContactsComponent}/>
                    <Route to={'/'} component={HomeComponent}/>
                </Switch>
            </main>
        );
    }
}

export default MainRouterComponent;
