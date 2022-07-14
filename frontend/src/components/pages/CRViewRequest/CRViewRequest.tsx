import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Field, Recruitment, Student } from '../../../model';
import { getRecruitmentList } from '../../../redux/apiRequest';
import { companyList, fieldList } from '../../../data';
import './CRViewRequest.css';

const CRViewRequest = () => {
    const user = useSelector((state: any) => state.auth.login?.currentUser);
    const recruitments = useSelector((state: any) => state.recruitment.recruitment?.recruitments);
    const [requests, setRequests] = useState<Recruitment[]>([]);
    const [majors, setMajors] = useState<Field[]>([]);
    const processRequest = (studentID: string, status: number) => { }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showRecuit, setShowRecuit] = useState('');

    useEffect(() => {
        if (user.roleID != 3) {
            navigate("/");
        }
        if (user?.accessToken) {
            getRecruitmentList(dispatch, user.username);
        }
        { console.log(recruitments) }
        setRequests(recruitments);
        setMajors(fieldList);
        window.onclick = (e: MouseEvent) => {
            const modal = document.getElementsByClassName('modal')[0] as HTMLDivElement;
            if (e.target == modal) {
                hideRecuitment();
            }
        }
    }, []);
    const hideRecuitment = () => {
        setShowRecuit('');
    }
    return (
        <div id='CRViewRequest'>
            <div id="content">
                <h3 className="content-heading">application list</h3>
                <div className="cr-search">
                    <p>Search</p> <input className="cr-search-bar" type="text" name="cr-search" /><i className="fas fa-search vertical-algin"></i>
                </div>
                <div className="content-title">
                    <p style={{ flexGrow: 0.4 }}>roll number</p>
                    <p style={{ flexGrow: 1 }}>student name</p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div id="student-list">
                    {
                        requests?.map(item =>
                            <div className="student-item">
                                <p className="col2">{item.studentID}</p>
                                <p className="col3">{item.studentName}</p>
                                <button className="col4 btn js-btn-detail btn-detail" >detail</button>
                                <button className="col5 btn js-btn-delete btn-accept" onClick={() => processRequest("SE140718", 1)}>accept</button>
                                <button className="col6 btn js-btn-delete btn-delete" onClick={() => processRequest("SE140718", 2)}>decline</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CRViewRequest