import React, { useState, Dispatch, FC, SetStateAction } from "react";
import CRHeader from "../../modules/pagecomponents/CRHeader/CRHeader";
import { User, Company } from "../../../model";
import "./CRProfile.css";
import { useForm } from "../../modules/pagecomponents/FormCR/FromCR";
const MockData = [
  {
    companyID: 1,
    companyName: "ABC Company",
    address: "Bien Hoa, Dong Nai",
    phone: "0123456789",
    email: "abcxyz123@gmail.com",
    webSite: "https://www.facebook.com/LongPham139/",
    fieldName: 1,
    introduction: "Good for you",
    imageURL: "/frontend/public/images/avatar-company.png",
    activeStatus: true,
    applyPosition: "Oke",
  },
];

const Profile: React.FC = () => {
  const { onChange, onSubmit, values } = useForm(inforCompanyCallback);
  async function inforCompanyCallback() {
    // send "values" to database
  }
  {
    console.log();
  }
  return (
    <div id="crprofile">
      <div className="header"></div>.
      <div className="body">
        <div className="img-content">
          <div className="img-logo">
            <img
              src="images/logo-fpt-certificate.png"
              alt="Logo_FPT"
              className="image-logo"
            />
          </div>
          <div className="content-logo">
            <h3>Phân hiệu trường đại học FPT tại Thành phố Hồ Chí Minh</h3>
          </div>
        </div>
        <div className="infor">
          <img
            src="images/avatar-company.png"
            alt="Logo Company"
            className="img-infor"
          />
          <div className="name-web">
            <div className="name-cr">
              <h3 className="cr-content">Company Name</h3>
              <h3 className="cr-content">{MockData[0].companyName}</h3>
            </div>
            <div className="name-cr">
              <h3 className="cr-content">Website</h3>
              <h3 className="cr-content">{MockData[0].webSite}</h3>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-cr">
            <div className="text-cr">
              <h5>Contact Information</h5>
            </div>
            <div className="field-cr">
              <div className="text-field">
                <label className="txtname" htmlFor="phone">
                  <h3>Phone</h3>
                </label>

                <div className="input-field">
                  <input
                    name="phone"
                    id="phone"
                    type="tel"
                    className="if"
                    defaultValue={MockData[0].phone}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <div className="text-field">
                <label className="txtname" htmlFor="workplace">
                  <h3>Workplace</h3>
                </label>

                <div className="input-field">
                  <input
                    name="workplace"
                    id="workplace"
                    type="text"
                    className="if"
                    defaultValue={MockData[0].address}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <div className="text-field">
                <label className="txtname" htmlFor="companyemail">
                  <h3>Company Email</h3>
                </label>

                <div className="input-field">
                  <input
                    name="companyemail"
                    id="companyemail"
                    type="text"
                    className="if"
                    defaultValue={MockData[0].email}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <div className="com-des">
                <div className="label-des">
                  <h5 className="lb-des">
                    Description<p className="bd-p"></p>
                  </h5>
                </div>
              </div>
              <div className="com-intro">
                <label htmlFor="com-intro">
                  <div className="label-intro">
                    <h3>Company introduction</h3>
                  </div>
                </label>

                <div className="input-intro">
                  <textarea
                    name="introduction"
                    id="com-intro"
                    className="input-intr"
                    defaultValue={MockData[0].introduction}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="btn-action">
            <div>
              <button className="btnCancel">Cancel</button>
            </div>
            <div>
              <button className="btnSave">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="footer"></div> */}
    </div>
  );
};
export default Profile;