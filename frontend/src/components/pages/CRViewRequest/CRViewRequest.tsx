import { useState } from 'react';
import { Student } from '../../../model';
import './CRViewRequest.css';

const CRViewRequest = () => {
    const [requests, setRequests] = useState<Student[]>([]);
    const processRequest = (studentID: string, status: number) => { }
    return (
        <div id='CRViewRequest'>
            <div id="content">
                <h3 className="content-heading">application list</h3>
                <div className="cr-search">
                    <p>Search</p> <input className="cr-search-bar" type="text" name="cr-search" /><i className="fas fa-search vertical-algin"></i>
                </div>
                <div className="content-title">
                    <p style={{ flexGrow: 0.4 }}>student name</p>
                    <p style={{ flexGrow: 1 }}>roll number</p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div id="student-list">
                    {/* {
                        requests?.map(item => */}
                    <div className="student-item">
                        <p className="col2">"Luong Ho Dac Dat"</p>
                        <p className="col3">SE140718</p>
                        <button className="col4 btn js-btn-detail btn-detail" >detail</button>
                        <button className="col5 btn js-btn-delete btn-accept" onClick={() => processRequest("SE140718", 1)}>accept</button>
                        <button className="col6 btn js-btn-delete btn-delete" onClick={() => processRequest("SE140718", 2)}>decline</button>
                    </div>
                    <div className="student-item">
                        <p className="col2">"Luong Ho Dac Dat"</p>
                        <p className="col3">SE140718</p>
                        <button className="col4 btn js-btn-detail btn-detail" >detail</button>
                        <button className="col5 btn js-btn-delete btn-accept" onClick={() => processRequest("SE140718", 1)}>accept</button>
                        <button className="col6 btn js-btn-delete btn-delete" onClick={() => processRequest("SE140718", 2)}>decline</button>
                    </div>
                    <div className="student-item">
                        <p className="col2">"Luong Ho Dac Dat"</p>
                        <p className="col3">SE140718</p>
                        <button className="col4 btn js-btn-detail btn-detail" >detail</button>
                        <button className="col5 btn js-btn-delete btn-accept" onClick={() => processRequest("SE140718", 1)}>accept</button>
                        <button className="col6 btn js-btn-delete btn-delete" onClick={() => processRequest("SE140718", 2)}>decline</button>
                    </div>
                    <div className="student-item">
                        <p className="col2">"Luong Ho Dac Dat"</p>
                        <p className="col3">SE140718</p>
                        <button className="col4 btn js-btn-detail btn-detail" >detail</button>
                        <button className="col5 btn js-btn-delete btn-accept" onClick={() => processRequest("SE140718", 1)}>accept</button>
                        <button className="col6 btn js-btn-delete btn-delete" onClick={() => processRequest("SE140718", 2)}>decline</button>
                    </div>
                    )
                    {/* } */}
                </div>
            </div>
        </div>
    )
}

export default CRViewRequest