import React from "react";

function Service() {
  return (
    <div className="service-container">
      <p className="title">OUR SERVICES</p>
      <div className="row mt-2">
        <div className="left col-md-6 mt-2">
          <h2>Design to Development, All in One place</h2>
          <p className="mt-3">
            TeamHashcode prioritizes customer satisfaction and honesty. Our
            services are designed to help our clients achieve their goals in the
            shortest possible timeframes, with a focus on delivering exceptional
            results every step of the way.
          </p>
        </div>
        <div className="right col-md-6">
          <div className="right-1">
            <div className="no">01</div>
            <div className="dis">
              <h3>UI/UX Design</h3>
              <small>
                We provide high-quality design services that prioritize
                usability, accessibility, and visual appeal that meets the needs
                of your users and achieves your business goals.
              </small>
            </div>
          </div>
          <div className="right-1">
            <div className="no">02</div>
            <div className="dis">
              <h3>Website Development</h3>
              <small>
                We provide high-quality design services that prioritize
                usability, accessibility, and visual appeal that meets the needs
                of your users and achieves your business goals.
              </small>
            </div>
          </div>
          <div className="right-1">
            <div className="no">03</div>
            <div className="dis">
              <h3>Mobile App Development</h3>
              <small>
                We provide high-quality design services that prioritize
                usability, accessibility, and visual appeal that meets the needs
                of your users and achieves your business goals.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
