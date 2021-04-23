import React, { Component } from 'react'
import FAQ from './FAQ';
import './FAQ.css'
export default class FAQList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             faqs : [
                {
                    question: 'Mention Github Link for this project?',
                    answer: 'GithubLink: saisitaram2000/tawkto_integration.',
                    isExpand: false
                  },
                  {
                    question: 'How do I get support?',
                    answer: 'We offer 24×7-365 live support via both chat and email. Simply initiate a  chat on our site at any time, and a member of our dedicated support team will help as best as they can.',
                    isExpand: false
                  },
                  {
                    question: 'Where can I find documentation?',
                    answer: 'You can find all necessary documentation at my github readme file',
                    isExpand: false
                  },
                  {
                    question: 'How to connect with you if I have any query?',
                    answer: 'You can chat with us using bottom-right chat icon.',
                    isExpand: false
                  },
                  {
                    question: 'Which techstack is used to build this project?',
                    answer: 'React is used.',
                    isExpand: false
                  },
                  {
                    question: 'Which platform is used for hosting?',
                    answer: 'Firebase is used for hosting.',
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
