import React from 'react';

const ScoreSection = () => {
    return (
        <section className="score">
            <div className="score_content row">
                <div className="col-12">
                    <h3 className="header-3 text-center">
                        Life Score
                    </h3>
                    <p className="bodyText text-center">
                        Lifechitect uses lifestyle data analytics to calculate your Life Score based on the duration
                        and kind of activities performed each week. Life Score is a Work-Life Balance Rating Index.
                    </p>
                    <div className="image">
                        <img src="svgs/score_scale.svg" alt="Life score"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScoreSection;
