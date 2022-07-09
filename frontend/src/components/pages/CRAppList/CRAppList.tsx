import React from "react";
import "primeicons/primeicons.css";
import "./CRAppList.css";

const MockData = [
  {
    name: "Luong Ho Dac Dat",
    number: "SE140718",
  },
  {
    name: "Pham Thanh Long",
    number: "SE140353",
  },
  {
    name: "Nguyen Bao Trung",
    number: "SE140258",
  },
  {
    name: "Luong Ho Dac Dat",
    number: "SE140718",
  },
  {
    name: "Pham Thanh Long",
    number: "SE140353",
  },
  {
    name: "Nguyen Bao Trung",
    number: "SE140258",
  },
  {
    name: "Luong Ho Dac Dat",
    number: "SE140718",
  },
  {
    name: "Pham Thanh Long",
    number: "SE140353",
  },
  {
    name: "Nguyen Bao Trung",
    number: "SE140258",
  },
];
type Props = {};

const CRAppList = (props: Props) => {
  return (
    <div id="CRAppList">
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
      <div className="table-list-student">
        <div className="table-header">
          <div className="table-header-cell">No.</div>
          <div className="table-header-cell" style={{ width: "25%" }}>
            STUDENT NAME
          </div>
          <div className="table-header-cell">ROLL NUMBER</div>
          <div className="table-header-cell" style={{ width: "40%" }}></div>
        </div>
        <p className="border-end"></p>
        <div className="table-body">
          {MockData.map((item, index) => [
            <div className="table-row">
              <div className="table-body-cell">{index + 1}</div>
              <div className="table-body-cell">{item.name}</div>
              <div className="table-body-cell">{item.number}</div>
              <div className="table-body-cell">
                <div className="group-button">
                  <button className="btn-detail">detail</button>
                  <button className="btn-accept">accept</button>
                  <button className="btn-decline">decline</button>
                </div>
              </div>
            </div>,
            <p className="border-end"></p>,
          ])}
        </div>
      </div>
    </div>
  );
};
export default CRAppList;
