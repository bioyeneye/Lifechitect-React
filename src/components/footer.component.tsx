import React from 'react';
import { createMailtoLink, createEmptyLink } from '../shared/helpers.ts/linkhelpers';



const FooterSection = () => {
    return (
        <footer className="footer" id="contactus">
            <div className="footer-content row align-items-baseline">
                <div className="col-12 col-xl-3 brandLogo">
                    <a className="navbar-brand" href="https://www.liferithims.com">
                        <img src="svgs/lifechitect_full_logo_white.svg" alt="" />
                    </a>
                </div>
                <div className="col-12 col-xl-8 footer_items">
                    <div className="address">
                        <address>
                            Liferithms, Inc.<br />
                        995 Market St,<br />
                        San Francisco, CA 94103<br />
                            <a href={createMailtoLink()}>info@liferithms.com</a>
                        </address>
                    </div>
                    <div className="footer_links">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href={createEmptyLink()} target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={createEmptyLink()} target="_blank" rel="noopener noreferrer">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                    <div className="socials">
                        <p>Follow us</p>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="https://instagram.com/lifechitectapp" target="_blank" rel="noopener noreferrer">
                                    <img src="svgs/instagram.svg" alt="Instagram" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://twitter.com/lifechitectapp" target="_blank" rel="noopener noreferrer">
                                    <img src="svgs/twitter.svg" alt="Twitter" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://linkedin.com/company/liferithms" target="_blank" rel="noopener noreferrer">
                                    <img src="svgs/linkedIn.svg" alt="LinkedIn" />
                                </a>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link" href={createEmptyLink()} target="_blank" rel="noopener noreferrer">
                                <img src="svgs/medium.svg" alt="Medium" />
                            </a>
                        </li> */}
                        </ul>
                        <p className="copyright">© 2020 Liferithms. All rights reserved.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default FooterSection;
