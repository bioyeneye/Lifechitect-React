import React from 'react';

interface CustomIntroSectionProp{
    intro: string;
}

class CustomIntroSection extends React.Component<CustomIntroSectionProp, {}> {

    render () {
        return (
            <section className="intro">
                <div className="row intro_content">
                    <div className="col-12">
                        <h3 className="intro_content_text text-center">{this.props.intro}</h3>
                    </div>
                </div>
            </section>
        );
    }
}

export default CustomIntroSection;
