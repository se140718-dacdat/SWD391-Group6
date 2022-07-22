import React, { FormEvent, SetStateAction, useState, Dispatch, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Company, Field, Recruitment, Report, ResponseData, User } from '../../../model';
import { fieldList } from '../../../data';
import './StudentViewCompany.css';
import _, { filter } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../../modules/popups/MessageBox/MessageBox';
import axios from 'axios';
const StudentViewCompany: React.FC = () => {
    const user = useSelector((state: any) => state.auth.login?.currentUser);
    const [majors, setMajors] = useState<Field[]>([]);
    const [companies, setCompanies] = useState<Company[]>([]);
    const [company, setCompany] = useState<Company | null>(null);
    const [showRecuit, setShowRecuit] = useState('');
    const [message, setMessage] = useState('');
    const [field, setField] = useState('0');
    const [search, setSearch] = useState('');




    useEffect(() => {
        fetchData();
        window.onclick = (e: MouseEvent) => {
            const modal = document.getElementsByClassName('modal')[0] as HTMLDivElement;
            if (e.target == modal) {
                hideRecuitment();
            }
        }
    }, []);

    async function fetchData() {
        const response = await fetch("http://localhost:8000/api/company/get-all-company");
        const data = await response.json();
        setCompanies(data);
        const res = await fetch("http://localhost:8000/api/field/get-fields");
        const fields = await res.json();
        setMajors(fields);
    }

    const hideRecuitment = () => {
        setShowRecuit('');
    }

    const applyToCompany = async (company: Company) => {
        const newRecruitment = {
            studentID: user.username.toUpperCase(),
            companyID: company.companyID,
            studentName: user.fullName,
            companyName: company.companyName,
            recruitmentStatus: 2
        }
        const res = await axios.post(`http://localhost:8000/api/recruitment/update/${2}`, newRecruitment);
        console.log(res);
        if (typeof res.data === 'string') {
            setMessage(res.data);
            setShowRecuit('');
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    }

    const searchSubmit = (e: FormEvent) => {
        e.preventDefault();
        // fetchData();
        // const formData = new FormData(e.target as HTMLFormElement);
        // const formField = formData.get('field') != null ? formData.get('field') : '0';
        // const formName = formData.get('search') != null ? formData.get('search') : '';
        // setField(formField as string);
        // setSearch(formName as string);
        // if (field != '0' && search != '') {
        //     setCompanies(_.filter(companies, {companyName: search}));
        //     console.log(`${field} and ${search}`)
        // }
        // else if (field != '0' && search == '') {
        //     console.log(`field: ${field}`);
        // } else if(search != '' && field == '0') {
        //     setCompanies(_.filter(companies, {companyName: search}));
        //     console.log(`field: ${search}`);
        // }
    }
    const showRecuitment = (company: Company) => {
        setShowRecuit('display');
        setCompany(company);
    }

    const handleChange = (e: any) => {
        setField(e);
    }


    return (
        <div id='StudentViewCompany'>
            {
                message != '' ?
                    <MessageBox message={message} setMessage={setMessage} title={"Information"}></MessageBox>
                    :
                    null
            }
            <div id="content">
                <form onSubmit={searchSubmit}>
                    <div className="search-bar">
                        <i className="fas fa-search search--bar--icon search-icon"></i>
                        <input type="text" className="search-input" name='search' onChange={(e) => { setSearch(e.target.value); }} placeholder="Search company name" />
                        <i className="fas fa-times-circle clear-icon" ></i>
                        <button className="btn btn-search"><i className="fas fa-search search-icon"></i> Search</button>
                    </div>
                    <div className="cover">
                        <div className="filter">
                            <select className="majors filter--item filter--select" name='field' onChange={(e) => { handleChange(e.target.value) }}>Majors <i className="fas fa-sort-down"></i>
                                <option className="majors-item" value={0} defaultChecked>All</option>
                                {
                                    majors.map(item =>
                                        <option className="majors-item" value={item.fieldID}>{item.fieldName}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </form>

                <div className="company-list">

                    {
                        companies?.filter((company) => {
                            if (search == '') {
                                return company;
                            } else if (company.companyName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                            company.companyID.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                return company;
                            }
                        }).map(item =>
                            <div className="company-item" onClick={() => { showRecuitment(item); }}>
                                <div className="company-logo">
                                    <img src={item.imageURL} alt="logo-company" />
                                </div>
                                <div className="company-info">
                                    <p className="company-name">{item.companyName}</p>
                                    <p className="company-place">{item.address}</p>
                                    <p className="recruitment-description">Major: <span></span>
                                        {
                                            item.careerField.map(field =>
                                                <span>{field.fieldName + ', '}</span>
                                            )
                                        }
                                    </p>
                                    {
                                        item.applyPosition != null ? item.applyPosition.split('\n').slice(0, 2).map(item =>
                                            <p className="recruitment-description">{item}</p>
                                        )
                                            :
                                            null
                                    }
                                    <p style={{ color: '#1765b3' }}>Click to show more</p>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>




            <div className={'modal ' + showRecuit}>
                <div className="modal-content js-modal-content">
                    <div className="modal-header">
                        <span className="close-modal" onClick={hideRecuitment}>
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
                            <p className="company-infor-title">Workplace</p>
                            <p className="company-infor-detail js-workplace">{company?.address}</p>
                        </div>
                        <div className="company-infor">
                            <p className="company-infor-title">Company introduction</p>
                            <div className="company-infor-desc">
                                <span>
                                    {
                                        company?.introduction == null ?
                                            null
                                            :
                                            company?.introduction.split('\n').map(item => {
                                                return (

                                                    <span>
                                                        {item}
                                                        <br />
                                                    </span>
                                                )
                                            })
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="company-infor">
                            <p className="company-infor-title">Job</p>
                            <div className="company-infor-desc">
                                <div className="introduction-content">
                                    {
                                        company?.applyPosition == null ?
                                            null
                                            :
                                            company?.applyPosition.split('\n').map(item => {
                                                return (
                                                    <span>
                                                        {item}
                                                        <br />
                                                        <br />
                                                    </span>
                                                )
                                            })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="company-infor">
                            <div className="company-infor-desc">
                                <span className="introduction-content">
                                    {
                                        company?.description == null ?
                                            null
                                            :
                                            company?.description.split('\n').map(item => {
                                                return (
                                                    <span>
                                                        {item}
                                                        <br />
                                                        <br />
                                                    </span>
                                                )
                                            })
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="divide">
                            <div className="divide-name">Contact information</div>
                            <div className="divide-line"></div>
                        </div>
                        <div className="recruiting-details">
                            <div className="col1">Phone:</div>
                            <div className="col2 js-phone">{company?.phone}</div>
                        </div>
                        <div className="recruiting-details">
                            <div className="col1">Email:</div>
                            <div className="col2 js-email">{company?.email}</div>
                        </div>
                        <div className="btn-interact">
                            {
                                (user) ?
                                    <button className="btn btn-apply" onClick={() => applyToCompany((company as Company))}>apply</button> :
                                    <button className="btn btn-apply" onClick={() => hideRecuitment()}>close</button>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StudentViewCompany
