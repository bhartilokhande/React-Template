import React from 'react';

function TitleCard(props) {
    return (
        <>
            <div className="card">
                <img src={props.image} className="card-img-top" alt="card imagge" />
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </>
    )
}
export default TitleCard;


