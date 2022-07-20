import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Field, Recruitment, Student } from '../../../model';
import MessageBox from '../../modules/popups/MessageBox/MessageBox';
import './CRViewRequest.css';

const CRViewRequest = () => {
  const user = useSelector((state: any) => state.auth.login?.currentUser);
  const [requests, setRequests] = useState<Recruitment[]>([]);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');


  useEffect(() => {
    if (user.roleID != 3) {
      navigate("/");
    }
    if (user?.accessToken) {
      fetchData(user.username);
      console.log(requests);
    }
  }, []);
  const processRequest = async (recruitment: Recruitment, status: number) => {
    const res = await axios.post(`http://localhost:8000/api/recruitment/update/${status}`, recruitment);
    if (typeof res.data === 'string') {
      setMessage(res.data);
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
    fetchData(user.username);

  }

  const fetchData = async (companyID: String) => {
    const res = await axios.get(`http://localhost:8000/api/recruitment/${companyID}`);
    setRequests(res.data.filter((recruitment: Recruitment) => recruitment.recruitmentStatus === 2));
    console.log(requests);
  }

  return (
    <div id='CRViewRequest'>
      {
        message != '' ?
          <MessageBox message={message} setMessage={setMessage} title={"Information"}></MessageBox>
          :
          null
      }
      <div id="content">
        <h3 className="content-heading">application list</h3>
        <div className="cr-search">
          <p>Search</p> <input className="cr-search-bar" type="text" name="cr-search" onChange={(e) => {setSearch(e.target.value);}}/><i className="fas fa-search vertical-algin"></i>
        </div>
        <div className="content-title">
          <p style={{ flexGrow: 0.4 }}>roll number</p>
          <p style={{ flexGrow: 1 }}>student name</p>
        </div>
        <div id="student-list">
          {
            requests?.filter((request) => {
              if(search == '') {
                return request;
            } else if(request.studentID.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
            || request.studentName.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                return request;}
            } ).map(item =>
              <div className="student-item">
                <p className="col2">{item.studentID}</p>
                <p className="col3">{item.studentName}</p>
                <button className="col4 btn js-btn-detail btn-detail" onClick={() => navigate('/cr/student-profile/' + item.studentID)} >detail</button>
                <button className="col5 btn js-btn-delete btn-accept" onClick={() => processRequest(item, 3)}>accept</button>
                <button className="col6 btn js-btn-delete btn-delete" onClick={() => processRequest(item, 4)}>decline</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
export default CRViewRequest;
