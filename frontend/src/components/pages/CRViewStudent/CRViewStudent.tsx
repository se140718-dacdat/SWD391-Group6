import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Student } from "../../../model";
import "./CRViewStudent.css";
import { studentList } from "../../../data.js";
import "primeicons/primeicons.css";

const CRViewStudent = () => {
  //   console.log(studentList);
  const [students, setStudent] = useState([studentList]);
  console.log(students[0][0].fullName);
  return (
    <div id="CRViewStudent">
      <div id="content">
        <div className="search-bar">
          <i className="pi pi-search search--bar--icon search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search student's id"
          />
          <i className="pi pi-times-circle clear-icon"></i>
          <button className="btn btn-search">
            <i className="pi pi-search search-icon"></i> Search
          </button>
        </div>
        <div className="filter">
          <div className="majors filter--item filter--select">
            Majors <i className="pi pi-sort-down"></i>
            <div id="majors-dropdown">
              <option className="majors-item" value="All">
                All
              </option>
            </div>
          </div>

          <div>
            <table className="table">
              <tr className="table-title">
                <th>No.</th>
                <th>Roll Number</th>
                <th>Student's Name</th>
                <th>Other</th>
              </tr>
              {students[0].map((item, index) => [
                <tr className="item">
                  <td rowSpan={2}>{index + 1}</td>
                  <td rowSpan={2}>{item.studentID}</td>
                  <td rowSpan={2}>{item.fullName}</td>
                  <td>
                    <button className="details-button">Details</button>
                  </td>
                </tr>,
              ])}
            </table>
            <div className="paging">
              <button className="paging-btn pre-btn">
                <i className="pi pi-angle-double-left"></i>
              </button>
              <div className="page-number">1</div>
              <button className="paging-btn next-btn">
                <i className="pi pi-angle-double-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRViewStudent;
