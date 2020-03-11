import React from 'react';
import { createEmptyLink } from '../shared/helpers.ts/linkhelpers';

const StoreSection = () => {
    return (
        <section className="download-from-store">
        <div className="row download-from-store_content">
            <div className="col-12 col-md-6 illustration">
                <img src="svgs/wellbeing_illustration.svg" alt="Mediation Illustration" />
            </div>
            <div className="col-12 col-md-6 manifest">
                <h3 className="manifest_text"><span>Find time for</span> <br/>important things.</h3>
                <ul className="nav manifest_downloadBtns">
                    <li className="nav-item">
                        <a className="nav-link" href={createEmptyLink()}><img src="svgs/download-on-the-app-store-apple.svg" alt="download-on-the-app-store-apple" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={createEmptyLink()}><img src="svgs/download-on-the-google-store.svg" alt="download-on-the-app-store-apple" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    );
}

export default StoreSection;
