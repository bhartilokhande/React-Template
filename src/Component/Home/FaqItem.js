import React from 'react';

function FaqItem(props) {
    return (
        <>
            <div className="faq_section">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.tartget}
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                     {props.faqbuttom}
                                         </button>
                        </h2>
                        <div id={props.itemid} className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">{props.accordinanbody}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FaqItem;