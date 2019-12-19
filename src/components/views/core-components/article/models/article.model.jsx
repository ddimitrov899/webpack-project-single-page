import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './../../../../styles/article.component.scss'
class ArticleModel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.renderArticles = this.renderArticles.bind(this);
        this.goTop = this.goTop.bind(this);
    }
    componentDidMount() {
        this.setState({...this.state, ...this.props.articles});
    }

    goTop() {
        document.documentElement.scrollTop
    }
    renderArticles() {

        return Object.values(this.state).map((s, i) => {
            return (<Link to={"/article/" + (i + 1)} key={i} className={'card-article'} onClick={this.goTop}>
                <img src={s.image} className="card-img-top" alt={s.title + "-image"}/>
                <div className="card-body">
                    <h5 className="card-title">{s.title}</h5>
                </div>
            </Link>)
        })
    }

    render() {
        return (
            <div className={'card'}>
                {Object.values(this.state).length > 0 && this.renderArticles()}
            </div>
        );
    }

}

export default ArticleModel;
