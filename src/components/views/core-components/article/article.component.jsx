import React, {Component} from 'react';
import ArticleModel from '../../../../models/article.model';
import {Link, Route, Switch} from "react-router-dom";
import articleFirstImage from './../../../../../public/assets/images/malta_coll.jpg'
import articleSecImage from './../../../../../public/assets/images/Moonlight.jpg'
import articleTurdImage from './../../../../../public/assets/images/Valenciadrems-22.jpg'
import articleForImage from './../../../../../public/assets/images/wild_stones_coll.jpg'
import ArticleViewComponent from "./article-view.component";

class ArticleComponent extends Component {
    constructor(props) {
        super(props);

        this.articles = [{
            image: articleFirstImage,
            title: 'Test',
            description: 'dsadsa'
        }, {
            image: articleSecImage,
            title: 'Test2',
            description: 'dsadsa2'
        }, {
            image: articleTurdImage,
            title: 'Test3',
            description: 'dsadsa3'
        }, {
            image: articleForImage,
            title: 'Test4',
            description: 'dsadsa4'
        },]
    }

    render() {
        return (
            <div>
                <ArticleModel articles={this.articles}/>
            </div>
        );
    }
}

export default ArticleComponent;
