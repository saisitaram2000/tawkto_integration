import React, { Component } from 'react'
import './FAQ.css';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import HelpIcon from '@material-ui/icons/Help';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
export default class FAQ extends Component {
    render() {
        const {faq,index,toggleFAQ}=this.props;
        return (
            <div 
                className={"faq"+(faq.isExpand?"-expand":"")} 
                key={toString(index)} 
                onClick={()=>toggleFAQ(index)}
            >
                <div className="faq-question-icon">
                    {/* <div className="faq-icon">
                        {faq.isExpand?<HelpIcon color="primary"/>:<HelpOutlineIcon/>}
                    </div> */}
                    <div className="faq-question">{faq.question}</div>
                    <div className="faq-icon">
                        {faq.isExpand?<ExpandMoreIcon/>:<ExpandLessIcon/>}
                    </div>
                </div>
                
                <div className="faq-answer">{faq.answer}</div>
            </div>
        )
    }
}
