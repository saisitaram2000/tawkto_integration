import React, { Component } from 'react'
import FAQ from './FAQ';
import './FAQ.css'
export default class FAQList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             faqs : [
                {
                    question: 'How many programmers does it take to screw in a lightbulb?',
                    answer: 'None. We don\'t address hardware issues.',
                    isExpand: false
                  },
                  {
                    question: 'Who is the most awesome person?',
                    answer: 'You. The Viewer.',
                    isExpand: false
                  },
                  {
                    question: 'How many questions does it take to make a successful FAQ Page?',
                    answer: 'This many.',
                    isExpand: false
                  }
             ]
        }
    }
    toggleFAQ = index =>{
        const {faqs}=this.state;
        this.setState(faqs.map((faq,i)=>{
            if(i===index){
                faq.isExpand=!faq.isExpand;
            }else{
                faq.isExpand=false;
            }
            return faq;
        }))
    }
    render() {
        const {faqs}=this.state;
        return (
            <div className="faq-list">
                {faqs.map((faq,i)=>(
                    <FAQ key={i} faq={faq} index={i} toggleFAQ={this.toggleFAQ}/>
                ))}
            </div>
        )
    }
}
