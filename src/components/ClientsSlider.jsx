import React from "react";

function ClientsSlider() {
  return (
    <div className="clients-container mb-5 mt-5">
      <h4 className="" style={{color: "#ee4c15"}}>
        Our Clients
      </h4>
      <div className="row align-items-center mt-2">
        <div className="col-lg-3  col-md-4 mb-2 col-6 col-sm-6">
          <img
            height={100}
            src="https://lh3.googleusercontent.com/p/AF1QipPnrXv7yLNYq51YEfrE5CzHUckTxuy0m2CzWWYd=w1080-h608-p-no-v0"
            alt=""
          />
        </div>
        <div className="col-lg-3 col-6 mb-2 col-md-4 col-sm-6 ">
          <img src="/img/abedok.png" alt="" />
        </div>
        <div className="col-lg-3 mb-2 col-6 col-md-4 col-sm-6 ">
          <img
            height={100}
            className="w-100"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className="col-lg-3 mb-2 col-6  col-md-4 col-sm-6 ">
          <img src="/img/checkbox.png" alt="" />
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-lg-3 col-md-4 col-6 col-sm-6">
          <img
            className="w-100"
            src="https://euisc.com/static/media/logo_text.558e00a2eaedb5c7790d.png"
            alt=""
          />
        </div>
        <div className="col-lg-3  col-md-4  col-6 col-sm-6 ">
          <img
            className="w-100"
            src="https://gsis.ac.in/wp-content/uploads/2020/09/Logo-Final-1.png"
            alt=""
          />
        </div>
        {/*  */}
        <div className="col-lg-3 col-md-4 col-6 col-sm-6 ">
          <img
            src="https://www.madanischoolandcollege.com/images/logo000.png"
            className="w-100"
            alt=""
          />
        </div>
        {/* <div className="col-lg-3 col-md-4 col-sm-6 ">
          <img src="/img/logo1.png" alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default ClientsSlider;
