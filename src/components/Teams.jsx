import React from "react";

function Teams() {
  return (
    <div className="mt-5">
      <div className="team-heading">
        <h2>Team Hashcode</h2>
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              height={350}
              className="w-100"
              src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/336441797_606544254661645_7320451166045525375_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGl-XlQVsY3dWoJ2HakWOGq53xiqqSXdDLnfGKqpJd0MuujqQHKKsZ__opbXtQsj2JXpWTqOshr6oiUu645_557&_nc_ohc=J--S_vYzVmQAX-9nlwy&_nc_ht=scontent.fcgp7-1.fna&oh=03_AdThyqTrI5RCDPQTmhDmPH1CbflZzIWeBdUAyL8_xfpdlQ&oe=64435921"
              alt=""
            />
            <div className="mt-3 d-flex flex-column align-items-center">
              <h4>Md Monjurul Alam</h4>
              <small>Senior Backend Developer </small>
            </div>
          </div>
          <div className="col-md-6">
            <img className="w-100" height={350} src="/img/kamrul.png" alt="" />
            <div className="mt-3 mt-3 d-flex flex-column align-items-center">
              <h4>Kamrul Hasan Anondo</h4>
              <small>Senior Full Stack Developer</small>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-6  d-flex flex-column align-items-center">
            <img
              height={300}
              width={300}
              className=" rounded-circle "
              src="/img/monjur.png"
              alt=""
            />
            <div className="mt-3 mt-3 d-flex flex-column align-items-center">
              <h4>Monjurul alam</h4>
              <small> Full Stack Developer</small>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <img className="w-100" height={350} src="/img/sazid.png" alt="" />
            <div className="mt-3 mt-3 d-flex flex-column align-items-center">
              <h4>Sazid Hasan Khan</h4>
              <small> Frontend Developer</small>
            </div>
          </div>
          <div className="col-md-6">
            <img className="w-100" height={350} src="/img/joy.png" alt="" />
            <div className="mt-3 d-flex flex-column align-items-center">
              <h4>Joy Chowdhury</h4>
              <small>Product Designer </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
