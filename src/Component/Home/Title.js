import React from 'react';
import TitleCard from './TitleCard.js';
import Card_img1 from '../../Asset/Image/specials-1.jpg';
import Card_img2 from '../../Asset/Image/specials-2.jpg';
import Card_img3 from '../../Asset/Image/specials-3.jpg';
import Card_img4 from '../../Asset/Image/specials-4.jpg';
import Card_img5 from '../../Asset/Image/specials-5.jpg';





function Title() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title">
                            TITLE
                        </div>
                        <div className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi. Molestias labore aperiam
                            reprehenderit beatae placeat? Eligendi impedit ducimus libero nihil fugiat. Corrupti ducimus ut dolorum neque
                            delectus optio harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi. Molestias labore aperiam
                            reprehenderit beatae placeat? Eligendi impedit ducimus libero nihil fugiat. Corrupti ducimus ut dolorum neque
                            delectus optio harum.
                         </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="title_nav">
                            <div className="nav">
                                <button className="nav_link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#button1"
                                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">Button 1</button>

                                <button className="nav_link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                                    type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Button 2</button>

                                <button className="nav_link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                                    type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Button 3</button>
                            </div>
                        </nav>
                    </div>
                </div>



                <div className="tab-content">

                    <div className="tab-pane fade show active" id="button1" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="card-group">
                            <TitleCard image={Card_img1} />
                            <TitleCard image={Card_img2} />
                            <TitleCard image={Card_img3} />

                        </div>
                    </div>

                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="card-group">
                            <TitleCard image={Card_img4} />
                            <TitleCard image={Card_img5} />
                            <TitleCard image={Card_img1} />

                        </div>
                    </div>


                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="card-group">
                            <TitleCard image={Card_img2} />
                            <TitleCard image={Card_img2} />
                            <TitleCard image={Card_img3} />

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Title;