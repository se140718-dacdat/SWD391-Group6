import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { User } from '../../../../model';
import { NavLink, useNavigate } from 'react-router-dom';
import './AdminHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../../redux/apiRequest';
interface Props {
    setUser: Dispatch<SetStateAction<User | null>>;
}
const AdminHeader: React.FC<Props> = props => {
    const user = useSelector((state: any) => state.auth.login.currentUser);
    const accessToken = user?.accessToken;
    const username = user?.username;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        logoutUser(dispatch, username, navigate, accessToken);
    }
    return (
        <div id='CREHeader'>
            <div id="navbar">
                <div className="nav-list">
                    <NavLink to={'/cre/companies/1'} className="nav-item"><span>companies</span></NavLink>
                    <NavLink to={'/cre/manage/students/1'} className="nav-item"><span>Students</span></NavLink>
                    <a onClick={logout} className="nav-item session"><span>logout</span></a>
                </div>
            </div>
            <div id="header">
                <div className="title">
                    <img className="title-img" src="/images/logo-fpt-certificate.png" alt="logo FPT" />
                    <h3 className="title-content">phân hiệu trường đại học fpt tại thành phố hồ chí minh</h3>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader;