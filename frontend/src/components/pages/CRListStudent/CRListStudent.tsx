import React, { useState } from "react";
import "../CRProfile/CRProfile.css";
import "./CRListStudent.css";
import "primeicons/primeicons.css";
const MockData = [
  {
    rollNumber: "SE1",
    name: "LongPT",
  },
  {
    rollNumber: "SE2",
    name: "DatLHD",
  },
  {
    rollNumber: "SE3",
    name: "KhoaTH",
  },
  {
    rollNumber: "SE4",
    name: "TrungNB",
  },
];
type Props = {};

const CRListStudent = (props: Props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="crlist">
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
      <div className="search-bar">
        <i
          className="pi pi-search search--bar--icon search-icon"
          style={{
            position: "absolute",
            lineHeight: "40px",
            textAlign: "center",
            width: "40px",
          }}
        ></i>
        <input
          type="text"
          className="search-input"
          placeholder="Search student's id"
        />
        <i
          className="pi pi-times-circle clear-icon"
          style={{
            position: "absolute",
            lineHeight: "40px",
            textAlign: "center",
            width: "40px",
            right: "12.5%",
            fontSize: "22px",
          }}
        ></i>
        <button className="btn btn-search">
          <i className="pi pi-search"></i> Search
        </button>
      </div>
      <div className="title-edit">
        <h3 className="edit-txt">Edit</h3>
      </div>
      <div className="table-list">
        <div className="table-header">
          <div className="table-header-cell">No.</div>
          <div className="table-header-cell">Roll Number</div>
          <div className="table-header-cell">Student’s Name</div>
          <div className="table-header-cell">Other</div>
        </div>
        <div className="table-body">
          {MockData.map((item, index) => [
            <div className="table-row">
              <div className="table-body-cell">{index + 1}</div>
              <div className="table-body-cell">{item.rollNumber}</div>
              <div className="table-body-cell">{item.name}</div>
              <div className="table-row-twocol">
                <div className="table-body-cell">
                  <a href="#" className="link-details">
                    Details
                  </a>
                </div>
                <div className="table-body-cell">xxxxxx</div>
              </div>
            </div>,
          ])}
        </div>
      </div>
      <div className="footer">
        <div className="import">
          <h4 className="import-label">IMPORT FORM CSV</h4>
          <div className="import-body">
            <h4 className="ib-txt">CSV File</h4>
            <input
              type="file"
              className="input-file"
              placeholder="Choose file"
            />
          </div>
        </div>
        <div className="paging">
          <div className="paging-left">
            <i className="pi pi-angle-double-left"></i>
          </div>
          <div className="paging-center">
            <h4>1</h4>
          </div>
          <div className="paging-right">
            <i className="pi pi-angle-double-right"></i>
          </div>
        </div>
        <div className="export">
          <a href="#" className="export-link">
            Export To CSV
          </a>
        </div>
      </div>
    </div>
  );
};
export default CRListStudent;
