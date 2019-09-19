import React, {Component} from 'react';
import CarouselComponent from "./core-components/carousel.component";
import ArticleComponent from "./core-components/article/article.component";

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <CarouselComponent />
                <ArticleComponent/>
            </div>
        );
    }
}

export default HomeComponent;
