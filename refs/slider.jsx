import React from "react";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import './slider.css'

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            slides: ['/sliders-01.jpg', '/sliders-02.jpg', '/sliders-03.jpg']
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    componentDidMount() {
        this.slideInterval()
    }

    slideInterval() {
        setInterval(this.nextSlide, 3500)
    }
    
    nextSlide() {
        if (this.state.position === 2) {
            this.setState({position: 0})
        } else {
            this.setState({position: this.state.position + 1})
        }
    }

    prevSlide() {
        if (this.state.position === 0) {
            this.setState({position: 2})
        } else {
            this.setState({position: this.state.position - 1})
        }
    }

    render() {
        return (
            <div className="slider">
                <KeyboardArrowLeftIcon className="left-arrow" onClick={this.prevSlide} />
		        <KeyboardArrowRightIcon className="right-arrow" onClick={this.nextSlide} />
                <img src={this.state.slides[this.state.position]} alt="sliders" className="slider-img"/>
            </div>
        )
    }
}