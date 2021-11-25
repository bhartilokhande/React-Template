import React from 'react';

function Footer (){
    return(
        <>
        <div className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <div className="footer_para">
            <h6>TITLE</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore recusandae mollitia, dolorem
              ipsum alias. Placeat fugiat dolores explicabo tempora tenetur. Provident temporibus quasi corrupti nisi
              beatae, enim reiciendis assumenda?</p>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="footer_link">
            <h6>LINK</h6>
            <ul className="list-group">
              <li className="list-item">An item</li>
              <li className="list-item">A second item</li>
              <li className="list-item">A third item</li>
              <li className="list-item">A fourth item</li>
              <li className="list-item">And a fifth one</li>
            </ul>
          </div>
        </div>


        <div className="col-lg-3">
          <div className="footer_about">
            <h6>ABOUT</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium velit, dolorum ab veniam quasi
              quibusdam soluta quae culpa aliquam non nam mollitia rem minus quos quas quisquam est, maiores debitis.
            </p>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="footer_address">
            <h6>ADDRESS</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur odit labore. Fugit ipsam
              provident ex! Delectus, blanditiis! Delectus eum aliquid suscipit quaerat architecto cumque alias ex
              dolorum obcaecati eos.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

        </>

    )
}
export default Footer;