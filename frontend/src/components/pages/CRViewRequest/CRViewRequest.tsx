import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Field, Recruitment, Student } from "../../../model";
import {
  getRecruitmentList,
  updateRecruitment,
} from "../../../redux/apiRequest";
import "./CRViewRequest.css";

const CRViewRequest = () => {
  const user = useSelector((state: any) => state.auth.login?.currentUser);
  const [requests, setRequests] = useState<Recruitment[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.roleID != 3) {
      navigate("/");
    }
    if (user?.accessToken) {
      fetchData(user.username);
      console.log(requests);
    }
  }, []);
  const processRequest = (studentID: string, status: number) => {
    updateRecruitment(dispatch, studentID, status);
    fetchData(user.username);
  };

  const fetchData = async (companyID: String) => {
    const res = await axios.get(
      `http://localhost:8000/api/recruitment/${companyID}`
    );
    setRequests(
      res.data.filter(
        (recruitment: Recruitment) => recruitment.recruitmentStatus === 1
      )
    );
    console.log(requests);
  };

  return (
    <div id="CRViewRequest">
      <div id="content">
        <h3 className="content-heading">application list</h3>
        <div className="cr-search">
          <p>Search</p>{" "}
          <input className="cr-search-bar" type="text" name="cr-search" />
          <i className="fas fa-search vertical-algin"></i>
        </div>
        <div className="content-title">
          <p style={{ flexGrow: 0.1 }}>No.</p>
          <p style={{ flexGrow: 0.1 }}>roll number</p>
          <p style={{ flexGrow: 1 }}>student name</p>
        </div>
        <div id="student-list">
          {requests?.map((item, index) => (
            <div className="student-item">
              <p>{index + 1}</p>
              <p className="">{item.studentID}</p>
              <p className="">{item.studentName}</p>
              <button
                className="col4 btn js-btn-detail btn-detail"
                onClick={() =>
                  navigate("/cr/student-profile/" + item.studentID)
                }
              >
                detail
              </button>
              <button
                className="btn js-btn-delete btn-accept"
                onClick={() => processRequest(item.studentID, 2)}
              >
                accept
              </button>
              <button
                className="col6 btn js-btn-delete btn-delete"
                onClick={() => processRequest(item.studentID, 3)}
              >
                decline
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CRViewRequest;
