/* eslint-disable no-restricted-globals */
import React from 'react';

export default class Page404 extends React.Component {
    render() {
        return (
            <div className="centralize-container">
                <h3>
                    Page not found <code>{location.pathname}</code>
                </h3>
            </div>
        );
    }
}