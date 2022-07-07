import { NavLink, useNavigate } from "react-router-dom";
import './AdminViewStudent.css';
import { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Company, Field, Student, User } from "../../../../model";
import { getAllUsers } from "../../../../redux/apiRequest";

const AdminViewStudent = () => {
    const user = useSelector((state: any) => state.auth.login?.currentUser);
    const students = useSelector((state: any) => state.user.users?.allUsers);
    const [studentList, setStudentList] = useState<Student[]>([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [pages, setPages] = useState<number[]>([]);
    const [search, setSearch] = useState('');
    const [majors, setMajors] = useState<Field[]>([]);
    const [companies, setCompanies] = useState<Company[]>([]);
    const [company, setCompany] = useState<Company>();
    const [showModal, setShowModal] = useState('');
    const [field, setField] = useState<number>(0);


    const deleteCompany = (companyID: string) => { }


    useEffect(() => {
        if (!user) {
            navigate("/");
        }
        if (user?.accessToken) {
            getAllUsers(user?.accessToken, dispatch);
        }
        { console.log(students) }
        setStudentList(students);
    }, []);
    const searchSubmit = () => {

    };

    return (
        <div id='CREViewCompany'>
            <div id='content'>
                <div className="vertical-algin">
                    <h3 className="content-heading">Student list</h3>
                    <div className="cr-search">
                        <form onSubmit={searchSubmit}>
                            Search <input className="cr-search-bar" type="text" name="search" placeholder="Company name" required /><i className="fas fa-search vertical-algin"></i>
                        </form>
                    </div>
                </div>
                <div className="clear"></div>
                <div className="filter">
                    <select className="majors filter--item filter--select" name='field'>Majors <i className="fas fa-sort-down"></i>
                        <option className="majors-item" value={0} defaultChecked>All</option>
                        {
                            majors.map(item =>
                                <option className="majors-item" value={item.fieldID}>{item.fieldName}</option>
                            )
                        }
                    </select>
                </div>
                <div className="content-title">
                    <p className="col2">roll number</p>
                    <p className="col3">student name</p>
                    <p>company applied</p>
                    <p></p>
                </div>
                <div id="company-list">
                    {
                        studentList.map((item) =>
                            <div className="company-item">
                                <p className="col2">{item.username}</p>
                                <p className="col3">{item.fullName}</p>
                                <button className="col4 btn js-btn-detail" onClick={() => { setShowModal('display'); }}>detail</button>
                                <button className="col5 btn js-btn-delete" onClick={() => deleteCompany(item.username.toString())}>delete</button>
                            </div>
                        )
                    }
                    <div className="paging">
                        <button className="paging-btn pre-btn"><i className="fas fa-angle-double-left"></i></button>
                        {
                            pages.map(item =>
                                <NavLink className='page-number' to={'/cre/companies?page=' + item + '&field=' + field + '&name=' + search}>{item}</NavLink>
                            )
                        }
                        <button className="paging-btn next-btn"><i className="fas fa-angle-double-right"></i></button>
                    </div>
                </div>
            </div>

            <div className={'modal ' + showModal}>
                <div className="modal-content js-modal-content">
                    <div className="modal-header">
                        <span className="close-modal" onClick={() => setShowModal('')}>
                            <i className="fas fa-times"></i>
                        </span>
                        <div className=" row modal-title">
                            <div className="col-haft"><img className="modal-company-logo" src={company?.imageURL} alt="comapny-logo" /></div>
                            <div className="company-introduction col-haft">
                                <h3 className="popup-company-name">{company?.companyName}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="modal-container">
                        <div className="company-infor">
                            <p className="company-infor-title">Website</p>
                            <a href={company?.webSite} className="company-infor-detail js-website">{company?.webSite}</a>
                        </div>
                        <div className="company-infor">
                            <p className="company-infor-title">Industry requirement</p>
                            <p className="company-infor-detail js-industry">{company?.fieldName}</p>
                        </div>
                        <div className="company-infor">
                            <p className="company-infor-title">Workplace</p>
                            <p className="company-infor-detail js-workplace">{company?.address}</p>
                        </div>
                        <div className="company-infor">
                            <p className="company-infor-title">Company introduction</p>
                            <div className="company-infor-desc">
                                {
                                    company?.introduction != null ?
                                        company.introduction.split('\n').map(item =>
                                            <span>{item}</span>
                                        )
                                        :
                                        null
                                }
                            </div>
                        </div>
                        <div className="company-infor">
                            <p className="company-infor-title">Job position</p>
                            <div className="company-infor-desc">
                                {
                                    company?.applyPosition != null ?
                                        company.applyPosition.split('\n').map(item =>
                                            [<span>{item}</span>, <br></br>, <br></br>]

                                        )
                                        :
                                        null
                                }
                            </div>
                        </div>
                        <div className="company-infor">
                            <div className="company-infor-desc">
                                {
                                    company?.description != null ?
                                        company.description.split('\n').map(item =>
                                            [<span>{item}</span>, <br></br>, <br></br>]
                                        )
                                        :
                                        null
                                }
                            </div>
                        </div>
                        <div className="divide">
                            <div className="divide-name">Contact information</div>
                            <div className="divide-line"></div>
                        </div>
                        <div className="recruiting-details">
                            <div className="modal-col1">Phone:</div>
                            <div className="modal-col2 js-phone">{company?.phone}</div>
                        </div>
                        <div className="recruiting-details">
                            <div className="modal-col1">Email:</div>
                            <div className="modal-col2 js-email">{company?.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminViewStudent;
