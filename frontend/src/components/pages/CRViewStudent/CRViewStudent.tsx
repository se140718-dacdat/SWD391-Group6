import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Recruitment, Student } from "../../../model";
import "./CRViewStudent.css";
import "primeicons/primeicons.css";
import { useDispatch, useSelector } from "react-redux";
import { getRecruitmentList } from "../../../redux/apiRequest";


const CRViewStudent = () => {
  const user = useSelector((state: any) => state.auth.login?.currentUser);
  const recruitments = useSelector((state: any) => state.recruitment.recruitment?.recruitments);
  const [requests, setRequests] = useState<Recruitment[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.roleID != 3) {
      navigate("/");
    }
    if (user?.accessToken) {
      getRecruitmentList(dispatch, user.username);
    }
    { console.log(recruitments) }
    setRequests(recruitments.filter((recruitment: Recruitment) => recruitment.recruitmentStatus === 2));
  }, []);
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
              {requests.map((item, index) => [
                <tr className="item">
                  <td rowSpan={2}>{index + 1}</td>
                  <td rowSpan={2}>{item.studentID}</td>
                  <td rowSpan={2}>{item.studentName}</td>
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
