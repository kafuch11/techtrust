import React from 'react';

const FAQsPage: React.FC = () => {
    const faqs = [
        {
            question: "What is TechTrust?",
            answer: "TechTrust is a platform that connects tech enthusiasts with industry experts."
        },
        {
            question: "How can I join TechTrust?",
            answer: "You can join TechTrust by signing up on our website and creating a profile."
        },
        {
            question: "Is TechTrust free to use?",
            answer: "Yes, TechTrust offers a free membership with access to basic features. Premium features are available with a subscription."
        }
    ];

    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index}>
                        <h2>{faq.question}</h2>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default FAQsPage;