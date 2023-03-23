import React from "react";

function Projects({tools = [], link, title, img}) {
  return (
    <div className="project-container p-sm-4">
      {/* <div className="projects-title">Our Recent Projects</div> */}
      <div className="row">
        <div className="col-md-6 project-dis">
          <h2>{title}</h2>
          <p>
            Checkbox is a Reseller Platform, that helps entrepreneurs to make
            money by reselling products in social media.{" "}
          </p>
          <div className="d-flex  flex-wrap" style={{gap: 20}}>
            {tools.map((t, i) => (
              <div key={i} className="tools">
                {t}
              </div>
            ))}

            {/* <div className="tools">Website Development</div>
            <div className="tools">Mobile App Development</div> */}
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <img height={500} className="w-100 cover-fill" src={img} alt="" />
          <div className="mt-5 btn btn-danger">
            <a href={link} target="_blank">
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
