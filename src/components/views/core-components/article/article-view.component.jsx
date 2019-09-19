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
            title: 'Where does it come from?',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
                '\n' +
                'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
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
        this.renderColumns = this.renderColumns.bind(this)
    }

    componentDidMount() {
        this.setState({...this.state, ...this.articles.find(a => a.id.toString() === this.props.match.params.articleId)})
    }

    renderColumns(text) {
        let textRender = '';
        let textToPush = [];
        for (let l = 0; l < text.length; l++) {
            textRender += text[l];

            if (textRender.length >= 333) {
                if(text[l + 1] !== " " && text[l] !== " ") {
                    textRender += '-'
                }
                textToPush.push(textRender);
                textRender = '';
            } else if (l + 1 >= text.length) {
                textToPush.push(textRender);
                textRender = '';
            }
        }
        return textToPush.map((l, i) => {
            return (<div key={i} className="col m6">
                <p>{l}</p>
            </div>)

        })
    }

    render() {
        return (
            <div className={'container article'}>
                <h1>{this.state.title}</h1>
                <img src={this.state.image} alt={this.state.title}/>
                <div className="row">
                    {this.renderColumns(this.state.description)}
                </div>
            </div>
        );
    }
}

export default ArticleViewComponent;
