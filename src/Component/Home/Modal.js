import React from 'react';
import aboutImage from '../../Asset/Image/about.jpg';

function Modal() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="modal_section_img">
                            <img className="modal_image" src={aboutImage} alt="about" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="modal_section_para">

                            <div className="modal_title">
                                MODAL<span className="badge ">New</span>
                            </div>
                            <div className="modal_para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi. Molestias labore
                                aperiam
                                reprehenderit beatae placeat? Eligendi impedit ducimus libero nihil fugiat. Corrupti ducimus ut dolorum
                                neque
                                delectus optio harum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi. Molestias labore
                                aperiam
                                reprehenderit beatae placeat? Eligendi impedit ducimus libero nihil fugiat. Corrupti ducimus ut dolorum
                                neque
                                delectus optio harum.
                            </div>


                            <div className="modal_section_btn">
                                <button type="button" className="btn modal_btn" data-bs-toggle="modal" data-bs-target="#ModalBackdrop">
                                    CLICK ME
                                </button>
                            </div>


                            <div className="modal fade" id="ModalBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Registration Form</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>

                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label">First name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Last name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Usesr name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">E-mail</label>
                                                    <input type="email" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input type="password" className="form-control" />
                                                </div>
                                                <div className="mb-3 form-check">
                                                    <input type="checkbox" className="form-check-input" />
                                                    <label className="form-check-label">Check me out</label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
export default Modal;