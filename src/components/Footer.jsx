import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="faq-footer">
                <div className="faq-footer-text">Made with <span className="faq-footer-heart"> &hearts;</span> by Sai Sita Ram Vaddavalli</div>
            </div>
        );
    }
}

export default Footer;