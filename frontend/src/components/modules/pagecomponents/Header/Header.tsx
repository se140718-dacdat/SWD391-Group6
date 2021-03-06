import './Header.css';
import React, { useState, FormEvent, Dispatch, SetStateAction } from 'react';
import { ResponseData, User } from '../../../../model';
import { userList } from '../../../../data';
interface Props {
    setUser: Dispatch<SetStateAction<User | null>>;
}
const Header: React.FC<Props> = props => {
    const [loginShow, setLoginShow] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const showLogin = () => {
        setLoginShow('display');
    }
    const hidePopup = () => {
        setLoginShow('');
    }
    const signInSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        console.log(form);
        props.setUser(userList[2]);
    }



    return (
        <header id="Header">
            <div>
                <div id="navbar">
                    <div className="nav-list">
                        <a className="nav-item"><span>home page</span></a>
                        <a onClick={showLogin} className="nav-item session"><span>login</span></a>
                    </div>
                </div>
                <div id="header">
                    <div className="title">
                        <img className="title-img" src="/images/logo-fpt-certificate.png" alt="logo FPT" />
                        <h3 className="title-content">phân hiệu trường đại học fpt tại thành phố hồ chí minh</h3>
                    </div>
                </div>
            </div>
            <div className={'modal ' + loginShow} onClick={hidePopup}>
                <div className="modal-cover">
                </div>
                <form onSubmit={signInSubmit}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <span className="close-modal" onClick={hidePopup}>
                                <i className="fas fa-times"></i>
                            </span>
                            <div className="modal-title">
                                <img className="modal-logo" src="images/logo-fpt-certificate.png" alt="" />
                                <h2 className="modal-name">Login</h2>
                                <p className="modal-description">Sign in to your account</p>
                            </div>
                        </div>
                        <div className="modal-container">
                            <i className="fa-solid fa-user input-user-icon"></i><input type="text" className="modal-input" required name='username' placeholder="Username" />
                            <i className="fas fa-lock input-pwd-icon"></i><input type="password" className="modal-input" required name='password' placeholder="Password" />
                            <button className="btn btn-login">Login</button>
                            {
                                loginMessage != '' ?
                                    <p className="login-status">
                                        <i className="fas fa-times"></i>
                                        {loginMessage}
                                    </p>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </form>
            </div>
        </header>
    );
}

export default Header;