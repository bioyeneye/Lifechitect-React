import React from 'react';

const TestimonialSection = () => {
    return (
        <section className="testimonial">
            <div className="testimonial_content row justify-content-center">
                <div className="col-12">
                    <h3 className="header-3 text-center">
                        What people say about Lifechitect
                    </h3>
                    <div className="testimonial_cards owl-carousel" id="owl-example">
                        <div className="testimonial_card">
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
                        <div className="testimonial_card">
                            <img src="svgs/“.svg" alt="quote" />
                            <p className="review">
                                Lifechitect completely changed my life. I went from being overwhelmed with so much
                                to do and achieving nothing to proper accountability and effective usage of my
                                time and achieving high productivity levels in my life and business.
                            </p>
                            <div className="reviewer">
                                <div className="image">
                                    <img src="images/Avatar.png" alt="Author" />
                                </div>
                                <div className="text">
                                    <p className="header-3">Ayo</p>
                                    <p className="subText">ex-serial procrastinator & finance contractor</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial_card">
                            <img src="svgs/“.svg" alt="quote" />
                            <p className="review">
                                Lifechitect helped me become intentional about my life. I went from being always busy
                                with no results in making sure every action aligned with my goals for each day.
                                </p>
                            <div className="reviewer">
                                <div className="image">
                                    <img src="images/Avatar.png" alt="Author" />
                                </div>
                                <div className="text">
                                    <p className="header-3">James</p>
                                    <p className="subText">ex-serial procrastinator & finance contractor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
