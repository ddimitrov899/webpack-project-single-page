import React, {Component} from 'react';
import './../../styles/carousel.component.scss'
import firsImage from './../../../../public/assets/images/slide_malta_1_field.jpeg'
import secImage from './../../../../public/assets/images/2-min.jpg'
import turdImage from './../../../../public/assets/images/slide_wild_2_field.jpeg'
import {Link} from "react-router-dom";
import 'materialize-css'

class CarouselComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const elem = $('.carousel').carousel({fullWidth: true, indicators: true, dist: 0});
        const instance = M.Carousel.getInstance(elem);
        setInterval(() => {
            instance.next()
        }, 5000)
    }

    render() {
        return (
            <div className="carousel carousel-slider center">
                <Link className="carousel-item" to={'#one'}><img src={firsImage} alt={'one'}/></Link>
                <Link className="carousel-item" to="#two!"><img src={secImage} alt={'two'}/></Link>
                <Link className="carousel-item" to="#three!"><img src={turdImage} alt={'three'}/></Link>
            </div>
        );
    }
}

export default CarouselComponent;
