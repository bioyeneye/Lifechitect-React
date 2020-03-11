import React from 'react';
import { createEmptyLink } from '../shared/helpers.ts/linkhelpers';

const IntroSection = () => {
    return (
        <section className="intro">
            <div className="row intro_content">
                <div className="col-12 col-md-6 col-xl-6">
                    <h3 className="intro_content_text"><span>Find time for</span> <br />important things.</h3>
                    <ul className="nav intro_content_downloadBtns">
                        <li className="nav-item">
                            <a className="nav-link" href={createEmptyLink()}><img src="svgs/download-on-the-app-store-apple.svg" alt="download-on-the-app-store-apple" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={createEmptyLink()}><img src="svgs/download-on-the-google-store.svg" alt="download-on-the-app-store-apple" /></a>
                        </li>
                    </ul>
                </div>
                <div className="illustration col-12 col-md-6 col-xl-6">
                    <img src="svgs/findBalance_illustration.svg" alt="Find Balance Illustration" />
                </div>
            </div>
        </section>
    );
}

export default IntroSection;
