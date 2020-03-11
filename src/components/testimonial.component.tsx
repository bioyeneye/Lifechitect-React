import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import './styles/carousel.css'

interface TestimonialSectionState {
    itemNo: number,
    loop: boolean,
    nav: boolean,
    rewind: boolean,
    autoplay: boolean
}

export default class TestimonialSection extends Component<{}, TestimonialSectionState> {

    constructor(props) {
        super(props);
        this.state = {
            itemNo: 3,
            loop: false,
            nav: false,
            rewind: true,
            autoplay: true
        };
    }

    render() {
        const options = {
            items: 1,
            loop: this.state.loop,
            nav: this.state.nav,
            rewind: this.state.rewind,
            autoplay: this.state.autoplay,
            responsive: {
                0: {
                    items: 1,
                },
                599: {
                    items: 2,
                },
                899: {
                    items: 2,
                },
                1199: {
                    items: 2,
                },
                1499: {
                    items: 3,
                }
            },
        };
        return (
            <section className="testimonial">
                <div className="testimonial_content row justify-content-center">
                    <div className="col-12">
                        <h3 className="header-3 text-center">
                            What people say about Lifechitect
                    </h3>
                        <div className="testimonial_cards owl-carousel" id="owl-example">
                            <OwlCarousel options={options}>
                                <div key={1} className="testimonial_card">
                                    <img src="svgs/“.svg" alt="quote" />
                                    <p className="review">
                                        Before Lifechitect I was very busy doing nothing. Now my time is accounted
                                        for and I make better time investments.
                                    </p>
                                    <div className="reviewer">
                                        <div className="image">
                                            <img src="images/Avatar.png" alt="Author" />
                                        </div>
                                        <div className="text">
                                            <p className="header-3">Lucy</p>
                                            <p className="subText">ex-serial procrastinator & finance contractor</p>
                                        </div>
                                    </div>
                                </div>
                                <div key={2} className="testimonial_card">
                                    <img src="svgs/“.svg" alt="quote" />
                                    <p className="review">
                                        Lifechitect completely changed my life. I went from being overwhelmed with so much
                                        to do and achieving nothing to proper accountability and effective usage of my
                                        time and achieving high productivity levels in my life and business.
                                </p>
                                    <div className="reviewer">
                                        <div className="image">
                                            <img src="images/avatar2.svg" alt="Author" />
                                        </div>
                                        <div className="text">
                                            <p className="header-3">Ayo</p>
                                            <p className="subText">content developer & graphics designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div key={3} className="testimonial_card">
                                    <img src="svgs/“.svg" alt="quote" />
                                    <p className="review">
                                        Lifechitect helped me become intentional about my life. I went from being always busy
                                        with no results in making sure every action aligned with my goals for each day.
                                </p>
                                    <div className="reviewer">
                                        <div className="image">
                                            <img src="images/avatar3.svg" alt="Author" />
                                        </div>
                                        <div className="text">
                                            <p className="header-3">Ruky</p>
                                            <p className="subText">mum of 3 & environmental consultant</p>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}