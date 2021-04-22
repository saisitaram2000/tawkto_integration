import React, { Component } from 'react'
import './FAQ.css';
export default class FAQ extends Component {
    render() {
        const {faq,index,toggleFAQ}=this.props;
        return (
            <div 
                className={"faq"+ (faq.isExpand?"-expand":"")} 
                key={toString(index)} 
                onClick={()=>toggleFAQ(index)}
            >
                <div className="faq-question">{faq.question}</div>
                <div className="faq-answer">{faq.answer}</div>
            </div>
        )
    }
}
