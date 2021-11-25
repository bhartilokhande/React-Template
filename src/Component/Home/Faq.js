import React from 'react';
import FaqItem from './FaqItem.js';

function Faq() {
    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="faq_title">
                        FAQ
                   </div>

                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <FaqItem tartget={"#q1"} itemid={"q1"} faqbuttom={"What are you looking for?"} accordinanbody={"Placeholder content for this accordion, which is intended to demo t This is the first item's accordion body."} />
                    </div>
                    <div className="col-lg-6">
                        <FaqItem tartget={"#q2"} itemid={"q2"} faqbuttom={"What are you looking for?"} accordinanbody={"Placeholder content for this accordion, which is intended to demo t This is the first item's accordion body."} />
                    </div>
                    <div className="col-lg-6">
                        <FaqItem tartget={"#q3"} itemid={"q3"} faqbuttom={"What are you looking for?"} accordinanbody={"Placeholder content for this accordion, which is intended to demo t This is the first item's accordion body."} />
                    </div>
                    <div className="col-lg-6">
                        <FaqItem tartget={"#q4"} itemid={"q4"} faqbuttom={"What are you looking for?"} accordinanbody={"Placeholder content for this accordion, which is intended to demo t This is the first item's accordion body."} />
                    </div>
                    <div className="col-lg-6">
                        <FaqItem  tartget={"#q5"} itemid={"q5"} faqbuttom={"What are you looking for?"} accordinanbody={"Placeholder content for this accordion, which is intended to demo t This is the first item's accordion body."} />
                    </div>
                    <div className="col-lg-6">
                        <FaqItem tartget={"#q6"} itemid={"q6"} faqbuttom={"What are you looking for?"} accordinanbody={"Placeholder content for this accordion, which is intended to demo t This is the first item's accordion body."} />
                    </div>
                </div>
            </div>
        </> 
    )
}
export default Faq;