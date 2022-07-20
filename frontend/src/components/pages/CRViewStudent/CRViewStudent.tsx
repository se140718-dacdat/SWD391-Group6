import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Recruitment } from "../../../model";
import "./CRViewStudent.css";
import "primeicons/primeicons.css";
import { useSelector } from "react-redux";
import axios from "axios";


const CRViewStudent = () => {
  const user = useSelector((state: any) => state.auth.login?.currentUser);
  const [requests, setRequests] = useState<Recruitment[]>([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (user.roleID != 3) {
      navigate("/");
    }
    if (user?.accessToken) {
      fetchData(user.username);
    }
  }, []);

  const fetchData = async (companyID: String) => {
    const res = await axios.get(`http://localhost:8000/api/recruitment/${companyID}`);
    setRequests(res.data.filter((recruitment: Recruitment) => recruitment.recruitmentStatus === 3));
    console.log(requests);
  }
  return (
    <div id="CRViewStudent">
      <div id="content">
        <div className="search-bar">
          <i className="pi pi-search search--bar--icon search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search student's id"
            onChange={(e) => {setSearch(e.target.value);}}
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
              {requests?.filter((request) => {
                if(search == '') {
                  return request;
              } else if(request.studentID.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
              || request.studentName.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                  return request;}
              } ).map((item, index) => [
                <tr className="item">
                  <td rowSpan={2}>{index + 1}</td>
                  <td rowSpan={2}>{item.studentID}</td>
                  <td rowSpan={2}>{item.studentName}</td>
                  <td>
                    <button className="details-button" onClick={() => navigate('/cr/student-profile/' + item.studentID)} >Details</button>
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
