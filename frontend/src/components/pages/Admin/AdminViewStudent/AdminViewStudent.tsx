import { NavLink, useNavigate } from "react-router-dom";
import './AdminViewStudent.css';
import { FormEvent, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Company, Field, Student, User } from "../../../../model";
import { getAllUsers, getStudentList } from "../../../../redux/apiRequest";
import { fieldList } from "../../../../data";
import axios from "axios";
interface Props {
    setPage: Number;
}
const AdminViewStudent = () => {
    const user = useSelector((state: any) => state.auth.login?.currentUser);
    const [students, setStudents] = useState<Student[]>([]);
    const [student, setStudent] = useState<Student>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [pages, setPages] = useState<number[]>([]);
    const [search, setSearch] = useState('');
    const [majors, setMajors] = useState<Field[]>([]);
    const [companies, setCompanies] = useState<Company[]>([]);
    const [company, setCompany] = useState<Company>();
    const [field, setField] = useState('0');
    const [username, setUsername] = useState('');
    const [showModal, setShowModal] = useState('');





    useEffect(() => {
        if (user.roleID != 1) {
            navigate("/");
        }
        if (user?.accessToken) {
            fetchData();
        }
        window.onclick = (e: MouseEvent) => {
            const modal = document.getElementsByClassName('modal')[0] as HTMLDivElement;
            if (e.target == modal) {
                hideModalment();
            }
        }
    }, []);
    const hideModalment = () => {
        setShowModal('');
    }
    const searchSubmit = (e: FormEvent) => {
        e.preventDefault();
        setStudents(students.filter((student: Student) => student.username == username.toLowerCase()));
    };

    const studentInsertOnchange = (e: FormEvent) => {
        e.preventDefault();
    }

    const fetchData = async() => {
        const res = await axios.get("http://localhost:8000/api/student/get-all-student");
        setStudents(res.data);
        const response = await fetch("http://localhost:8000/api/field/get-fields");
        const fields = await response.json();
        setMajors(fields);
   }

   const handleChange = (e: any) => {
    setField(e);
   }
    return (
        <div id="CREManageStudent">
            <div id="content">
                <div>
                    <form onSubmit={searchSubmit} className="clear">
                        <input className="search-bar" placeholder="Search student" type="text" name='search' onChange={(e) => {setSearch(e.target.value);}}/>
                        <button className="btn-search" type='submit'>Search</button>
                        <div className="exe">
                            <h3>import form exe</h3>
                            <div className="exe-link">
                                <p>exe file</p>
                                <div className="block">
                                    <div className="exe-file">
                                        <input type='file' accept={'.exe'} onChange={studentInsertOnchange} />
                                    </div>
                                    <a href="/files/student-insert-example.exe">Download example</a>
                                </div>
                            </div>
                        </div>
                        <select className="filter-select" name="field" onChange={(e) => {handleChange(e.target.value)}}>
                            <option value='0'>All</option>
                            {
                                majors?.map(item =>
                                    <option value={item.fieldID}>{item.fieldName}</option>
                                )
                            }
                        </select>
                    </form>
                </div>

                <table className="table-student">
                    <thead>
                        <tr className="table-student-title">
                            <th className="col1">Roll number</th>
                            <th className="col2">Name</th>
                            <th className="col3">Major</th>
                            <th className="col4">Email</th>
                            <th className="col5">Phone</th>
                            <th className="col6">Edit</th>
                            <th className="col7">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students?.filter((student) => {
                                if(search == '') {
                                  return student;
                              } else if(student.studentID.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
                              || student.fullName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                              || student.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                  return student;}
                              } ).filter((student) => {
                                if(field == '0') {
                                    return student;
                                } else if(student.major == field) {
                                    return student;
                                }
                              }).map(item =>
                                <tr className="table-student-info">
                                    <td className="col1">{item.studentID}</td>
                                    <td className="col2">{item.fullName}</td>
                                    <td className="col3">{item.fieldName}</td>
                                    <td className="col4">{item.email}</td>
                                    <td className="col5">{item.phone}</td>
                                    <td className="col6"><button className="btn-edit" onClick={() => { setShowModal('display'); setStudent(item); }}>Edit</button></td>
                                    <td className="col7"><button className="btn-delete">Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="flexbox">

                    <div className="paging">
                        <button className="paging-btn pre-btn"><i className="fas fa-angle-double-left"></i></button>
                        {
                            pages.map(item =>
                                <NavLink to={'/cre/manage/students/' + item + '?search=' + search} className="page-number">{item}</NavLink>
                            )
                        }
                        <button className="paging-btn next-btn"><i className="fas fa-angle-double-right"></i></button>
                    </div>
                    <div></div>
                </div>
                {/*modal*/}
                <div className={'modal ' + showModal}>
                    <div className="modal-content js-modal-content">
                        <div className="modal-header">
                            <span className="close-modal" onClick={() => setShowModal('')}>
                                <i className="fas fa-times"></i>
                            </span>
                            <div className=" row modal-title">
                            </div>
                        </div>
                        <div className="modal-container">
                            <form >
                                <input type="hidden" name='studentid' value={student?.studentID} />
                                <div className="row">
                                    <div className="col-haft">
                                        <p>Roll number</p>
                                        <p className="student-id">{student?.studentID}</p>
                                    </div>
                                    <div className="col-haft">

                                        <p>Gender</p>
                                        <select name="gender" value={"Male"} >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-haft">
                                    <p>Name</p>
                                    <input type="text" required pattern={'[^\\d!@#$%^&*()_+-=]*$'} name='fullname' value={student?.fullName} />
                                </div>
                                <div className="col-haft">
                                    <p>Username</p>
                                    <input name='username' required value={student?.username} ></input>
                                </div>
                                <div className="col-haft">
                                    <p>Date of birth</p>
                                    <input className="birth" type="date" name='dateofbirth' required value={student?.dateOfBirth} />
                                </div>
                                <div className="col-haft">
                                    <p>Phone</p>
                                    <input type="text" name='phone' minLength={10} maxLength={10} pattern='\d+' required value={student?.phone} />
                                </div>
                                <div className="col-haft">
                                    <p>Address</p>
                                    <input type="text" name='address' value={student?.address} required />
                                </div>
                                <div className="col-haft">
                                    <p>Major</p>
                                    <select name="major" value={"Male"} >
                                        {
                                            majors.map(item =>
                                                <option value={item.fieldID}>{item.fieldName}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="col-haft">
                                    <p>Email</p>
                                    <input type="email" name='email' required value={student?.email} />
                                </div>
                                <div className="col-haft right">
                                    <button className="btn-submit" type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminViewStudent;
