import "./CRHeader.css";
import React, { Dispatch, FC, SetStateAction } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { User } from "../../../../model";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../../redux/apiRequest";
interface Props {
  setUser: Dispatch<SetStateAction<User | null>>;
}
const CRHeader: FC<Props> = props => {
  const user = useSelector((state: any) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const username = user?.username;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    logoutUser(dispatch, username, navigate, accessToken);
  }
  return (
    <div id='CRHeader'>
      <div id="navbar">
        <div className="nav-list">
          <NavLink to={'/'} className="nav-item"><span>home page</span></NavLink>
          <NavLink to={'/cr/students'} className="nav-item"><span>students</span></NavLink>
          <NavLink to={'/cr/requests'} className="nav-item"><span>recruit</span></NavLink>
          <NavLink to={'/cr/profile'} className="nav-item"><span>profile</span></NavLink>
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
  );
};

export default CRHeader;
