import React, { Component } from 'react';
import api from '../shared/api';
// import FlipNumbers from "react-flip-numbers";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

interface ActivtiySectionState {
    trackervalue: number,
    initialtrackervalue: number
}

export default class ActivtiySection extends Component<{}, ActivtiySectionState> {

    private timer: NodeJS.Timeout;
    

    constructor(props) {
        super(props);
        this.state = {
            initialtrackervalue: 1000,
            trackervalue: 2661130
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.timer = setInterval(() => {
            this.setState({
                initialtrackervalue: this.state.trackervalue,
                trackervalue: this.state.trackervalue + api.getTimeAnalyzed(),
            });
        }, 1000 * 60 * 60);
    }

    toggleMenu() {

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {

        // const show = (this.state.menu) ? "show" : "";
        // const menucontentStyle = {
        //     backgroundColor: "white",
        //     boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.08)",
        // };
        return (
            <section className="activity">
                <div className="activity_content row">
                    <div className="col-12">
                        <div className="header_container">
                            <h3 className="header text-center">
                                ACTIVITY DATA ANALYZED
                    </h3>
                        </div>
                        <div className="countdown">
                            <p className="counter">
                                <CountUp separator="," end={this.state.trackervalue} redraw={false}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor 
                                            onChange={start} 
                                            delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                </CountUp>
                            </p>
                            <p className="time">
                                minutes
                    </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
