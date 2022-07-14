import React, { FormEvent, SetStateAction, useState, Dispatch, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Company, Field, Report, ResponseData, User } from '../../../model';
import { companyList, fieldList } from '../../../data';
import './StudentViewCompany.css';
import _ from 'lodash';
const StudentViewCompany: React.FC = () => {
    const [majors, setMajors] = useState<Field[]>([]);
    const [companies, setCompanies] = useState<Company[]>([]);
    const [company, setCompany] = useState<Company | null>(null);
    const [report, setReport] = useState<Report | null>();
    const [pages, setPages] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [showRecuit, setShowRecuit] = useState('');

    useEffect(() => {
        setCompanies(companyList);
        setMajors(fieldList);
        companies.map((company, index) => {
            pages.push(index++);
        })
        console.log(pages);
        window.onclick = (e: MouseEvent) => {
            const modal = document.getElementsByClassName('modal')[0] as HTMLDivElement;
            if (e.target == modal) {
                hideRecuitment();
            }
        }
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = companies.slice(indexOfFirstPost, indexOfLastPost);
    const hideRecuitment = () => {
        setShowRecuit('');
    }

    const applyToCompany = (company: Company) => {

    }

    const searchSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
    }
    const showRecuitment = (company: Company) => {
        setShowRecuit('display');
        setCompany(company);
        setReport(report);
    }

    return (
        <div id='StudentViewCompany'>
            <div id="content">
                <form onSubmit={searchSubmit}>
                    <div className="search-bar">
                        <i className="fas fa-search search--bar--icon search-icon"></i>
                        <input type="text" className="search-input" name='search' placeholder="Search for jobs, companies" />
                        <i className="fas fa-times-circle clear-icon" ></i>
                        <button className="btn btn-search"><i className="fas fa-search search-icon"></i> Search</button>
                    </div>
                    <div className="cover">
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
                    </div>
                </form>

                <div className="company-list">

                    {
                        currentPosts.map(item =>
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
                <div className="paging">
                    <button className="paging-btn pre-btn"><i className="fas fa-angle-double-left"></i></button>
                    {
                        pages.map(item =>
                            <NavLink className='page-number' to={'/student/companies?page=' + item}>{currentPage}</NavLink>
                        )
                    }
                    <button className="paging-btn next-btn"><i className="fas fa-angle-double-right"></i></button>
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
                                report == null ?
                                    <button className="btn btn-apply" onClick={() => applyToCompany((company as Company))}>apply</button>
                                    :
                                    report.companyID == company?.companyID ?
                                        null
                                        :
                                        <button className="btn btn-transfer">transfer</button>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StudentViewCompany