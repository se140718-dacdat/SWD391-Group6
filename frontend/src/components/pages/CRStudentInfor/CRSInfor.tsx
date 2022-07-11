import React from "react";
import "./CRSInfor.css";
type Props = {};
const MockData = [
  {
    studentID: "1",
    dateOfBirth: "2022",
    gender: "male",
    address: "HCM",
    phone: "0774816851",
    major: "Software Engineer",
    fieldName: "Luong Ho Dac Dat",
    cV_URL: "myCv.pdf",
    ojtStatus: true,
    username: "datlhd",
    rollNumber: "SE140718",
    email: "datlhdse140718@fpt.edu.vn",
  },
];
function CRSInfor({ }: Props) {
  return (
    <div id="CRSInfor">
      <div className="infor-body">
        <div className="infor-min">
          <div className="infor-name">
            <h2>{MockData[0].fieldName}</h2>
          </div>
          <div className="infor-avt">
            <img
              className="avt-img"
              src="/images/blankAvt.jpg"
              alt={MockData[0].fieldName}
            />
          </div>
          <div className="infor-age">
            <h4 className="text">Age</h4>
            <h4 className="data">22</h4>
          </div>
          <div className="infor-age">
            <h4 className="text">Location</h4>
            <h4 className="data">{MockData[0].address}</h4>
          </div>
          <div className="infor-age">
            <h4 className="text">CV</h4>
            <h4 className="data">
              <a className="data-link" href={MockData[0].cV_URL}>
                {MockData[0].cV_URL}
              </a>
            </h4>
          </div>
        </div>
        <div className="infor-max">
          <div className="slogan">
            <h2>Student Information</h2>
          </div>
          <p className="underline"></p>
          <div className="max-label">
            <div className="two-row">
              <h4 className="max-text">Full Name</h4>
              <h4 className="max-data">{MockData[0].fieldName}</h4>
            </div>
            <div className="gender">
              <h4 className="max-text">Gender</h4>
              <h4 className="max-data">{MockData[0].gender}</h4>
            </div>
          </div>
          <div className="max-label">
            <div className="two-row">
              <h4 className="max-text">Roll Number</h4>
              <h4 className="max-data">{MockData[0].rollNumber}</h4>
            </div>
            <div className="gender">
              <h4 className="max-text">Major</h4>
              <h4 className="max-data">{MockData[0].major}</h4>
            </div>
          </div>
          <div className="max-label">
            <div className="one-row">
              <h4 className="one-text">Email</h4>
              <h4 className="one-data">{MockData[0].email}</h4>
            </div>
          </div>
          <div className="max-label">
            <div className="one-row">
              <h4 className="one-text">Address</h4>
              <h4 className="one-data">{MockData[0].address}</h4>
            </div>
          </div>
          <div className="max-label">
            <div className="one-row">
              <h4 className="one-text">Phone Number</h4>
              <h4 className="one-data">{MockData[0].phone}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CRSInfor;
