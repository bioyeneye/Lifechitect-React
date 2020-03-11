import React from 'react';

const HowItWorksSection = () => {
    return (
        <section className="work" id="howItWorks">
            <div className="work_content row justify-content-center">
                <div className="col-12">
                    <h3 className="header-3 text-center">
                        How it works
                </h3>
                    <div className="image d-none d-md-block">
                        <img src="images/How it Works.png" alt="how it works" />
                    </div>
                    <div className="phoneImages d-md-none">
                        <div className="phoneImage">
                            <img src="images/Group 469.png" alt="Phone" />
                            <p>Track your daily activities</p>
                        </div>
                        <div className="phoneImage">
                            <img src="images/Group 470.png" alt="Phone" />
                            <p>Review actionable insights</p>
                        </div>
                        <div className="phoneImage">
                            <img src="images/Group 380.png" alt="Phone" />
                            <p>Build positive habits</p>
                        </div>
                        <div className="phoneImage">
                            <img src="images/Group 469.png" alt="Phone" />
                            <p>Improve your lifescore</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorksSection;
