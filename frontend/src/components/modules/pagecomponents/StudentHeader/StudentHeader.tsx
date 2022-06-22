import React, { Dispatch, SetStateAction } from 'react'
import { User } from '../../../../model';
import { useNavigate, NavLink } from 'react-router-dom';
import './StudentHeader.css';
interface Props {
    setUser: Dispatch<SetStateAction<User | null>>;
}
const StudentHeader: React.FC<Props> = props => {
    const navigate = useNavigate();
    const logout = () => {
        window.location.href = '/';

    }
    return (
        <div id='StudentHeader'>
            <div id="navbar">
                <div className="nav-list">
                    <NavLink to={'/'} className="nav-item"><span>home page</span></NavLink>
                    <NavLink to={'/student/companies'} className="nav-item"><span>career opportunities</span></NavLink>
                    <NavLink to={'/student/history/1'} className="nav-item"><span>request</span></NavLink>
                    <NavLink to={'/student/profile'} className="nav-item"><span>profile</span></NavLink>
                    <a onClick={logout} className="nav-item session js-login-btn"><span>logout</span></a>
                </div>
            </div>
            <div id="header">
                <div className="title">
                    <img className="title-img" src="images/logo-fpt-certificate.png" alt="logo FPT" />
                    <h3 className="title-content">phân hiệu trường đại học fpt tại thành phố hồ chí minh</h3>
                </div>
            </div>
        </div>
    )
}

export default StudentHeader;