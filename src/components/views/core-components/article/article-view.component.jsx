import React, {Component} from 'react';
import './../../../styles/article-view.component.scss'
import articleFirstImage from "../../../../../public/assets/images/malta_coll.jpg";
import articleSecImage from "../../../../../public/assets/images/Moonlight.jpg";
import articleTurdImage from "../../../../../public/assets/images/Valenciadrems-22.jpg";
import articleForImage from "../../../../../public/assets/images/wild_stones_coll.jpg";

class ArticleViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            title: '',
            description: ''
        };
        this.articles = [{
            id: "1",
            image: articleFirstImage,
            title: 'Test',
            description: 'dsadsa'
        }, {
            id: "2",
            image: articleSecImage,
            title: 'Test2',
            description: 'dsadsa2'
        }, {
            id: "3",
            image: articleTurdImage,
            title: 'Test3',
            description: 'dsadsa3'
        }, {
            id: "4",
            image: articleForImage,
            title: 'Test4',
            description: 'dsadsa4'
        },]
    }

    componentDidMount() {
       this.setState({...this.state, ...this.articles.find(a =>a.id.toString() === this.props.match.params.articleId)})
    }

    render() {
        return (
            <div className={'container article'}>
                <h1>{this.state.title}</h1>
                <img src={this.state.image} alt={this.state.title} />
                <p>{this.state.description}</p>
            </div>
        );
    }
}

export default ArticleViewComponent;
