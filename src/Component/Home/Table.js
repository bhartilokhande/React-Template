import React from 'react';

function Table() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title">
                            TABLE
                         </div>
                        <div className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi. Molestias labore aperiam
                            reprehenderit beatae placeat? Eligendi impedit ducimus libero nihil fugiat. Corrupti ducimus ut dolorum
                            neque
                            delectus optio harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi. Molestias labore aperiam
                            reprehenderit beatae placeat? Eligendi impedit ducimus libero nihil fugiat. Corrupti ducimus ut dolorum
                            neque
                            delectus optio harum.
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_table table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>john@example.com</td>
                                    </tr>
                                    <tr>
                                        <td>Mary</td>
                                        <td>Moe</td>
                                        <td>mary@example.com</td>
                                    </tr>
                                    <tr>
                                        <td>July</td>
                                        <td>Dooley</td>
                                        <td>july@example.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Table;