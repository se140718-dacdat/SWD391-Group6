import React from "react";
import "../CRProfile/CRProfile.css";
import "primeicons/primeicons.css";
import "./CRAppList.css";

type Props = {};

const CRAppList = (props: Props) => {
  return (
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
      <div className="search-content">
        <div className="content">
          <h3>Application List</h3>
        </div>
        <div className="search-bar">
          <h4 className="txt-search">Search</h4>
          <input type="text" className="input-search-bar" />
          <i className="pi pi-search search-icon"></i>
        </div>
      </div>
    </div>
  );
};
export default CRAppList;
