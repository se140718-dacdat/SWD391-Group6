import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Student } from "../../../model";
import './CRViewStudent.css';
const CRViewStudent = () => {
    const [students, setStudent] = useState<Student[]>([]);
    return (
        <div id='CRViewStudent'>
            <div id="content">
                <div className="search-bar">
                    <i className="fas fa-search search--bar--icon search-icon"></i>
                    <input type="text" className="search-input" placeholder="Search student's id" />
                    <i className="fas fa-times-circle clear-icon"></i>
                    <button className="btn btn-search"><i className="fas fa-search search-icon"></i> Search</button>
                </div>
                <div className="filter">
                    <div className="majors filter--item filter--select">Majors <i className="fas fa-sort-down"></i>
                        <div id="majors-dropdown">
                            <option className="majors-item" value="All">All</option>
                        </div>
                    </div>

                    <div>
                        <table className="table">
                            <tr className="table-title">
                                <td>Roll Number</td>
                                <td>Student's Name</td>
                                <td>Other</td>
                            </tr>
                            {/* {
                                students.map(item => */}
                            {/* [ */}
                            <tr className="item">
                                <td rowSpan={2} >SE140718</td>
                                <td rowSpan={2} >Luong Ho Dac Dat</td>
                                <td>
                                    <button className="details-button"  >Details</button>
                                </td>
                            </tr>
                            {/* ] */}
                            {/* )
                            } */}
                        </table>
                        <div className="paging">
                            <button className="paging-btn pre-btn"><i className="fas fa-angle-double-left"></i></button>
                            <div className="page-number">1</div>
                            <button className="paging-btn next-btn"><i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CRViewStudent