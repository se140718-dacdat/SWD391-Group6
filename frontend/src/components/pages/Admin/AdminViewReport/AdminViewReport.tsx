import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Recruitment } from "../../../../model";
import MessageBox from "../../../modules/popups/MessageBox/MessageBox";
import './AdminViewReport.css';

const AdminViewReport = () => {
    const [reports, setReports] = useState<Recruitment[] | null>([]);
    const user = useSelector((state: any) => state.auth.login?.currentUser);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [filter, setFilter] = useState(0);


    useEffect(() => {
        if (user.roleID != 1) {
            navigate("/");
        }
        if (user?.accessToken) {
            fetchData();
        }
        // if (reports) {
        //     console.log(filter);
        //     if (filter == 0) {
        //         fetchData();
        //     }
        //     else {
        //         setReports(reports.filter(r => r.recruitmentStatus == filter));
        //     }
        // }
    }, []);

    const fetchData = async () => {
        const res = await axios.get("http://localhost:8000/api/recruitment/get-recruitments");
        setReports(res.data);
    }

    const getStatus = (recruitmentStatus: Number) => {
        switch (recruitmentStatus) {
            case 3:
                return ("Applied");
            case 2:
                return ("Registering");
            default:
                return ("Not Yet");
        }
    }

    const handleChange = (e: any) => {
        setFilter(e);
        console.log(filter);
    }

    return (
        <div id="CREViewRequest">
            {
                message != '' ?
                    <MessageBox message={message} setMessage={setMessage} title='Information'></MessageBox> :
                    null
            }
            <div id="content">
                <div className="content-heading">
                    <h3>request list</h3>
                    <select className="types filter--item filter--select" defaultValue='0' onChange={(e) => {handleChange(e.target.value)}}>Types
                        <option className="types-item" value="0">All</option>
                        <option className="types-item" value="1">Not yet</option>
                        <option className="types-item" value="2">Registering</option>
                        <option className="types-item" value="3">Applied</option>
                    </select>
                </div>
                <div className="request-list">
                    <div className="request-title">
                        <div className="col2">type</div>
                        <div className="col3">student id</div>
                        <div className="col4">student name</div>
                        <div className="col5">apply company</div>
                    </div>
                    {
                        reports?.filter((report) => {
                            if(filter == 0) {
                                return report;
                            } else if(report.recruitmentStatus == filter) {
                                return report;
                            }
                        }).map(item =>
                            <div className="request-item">
                                <div className="col2"><span className="request-status">{getStatus(item.recruitmentStatus)}</span></div>
                                <div className="col3">{item.studentID}</div>
                                <div className="col4">{item.studentName}</div>
                                <div className="col5">{item.companyName}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminViewReport;