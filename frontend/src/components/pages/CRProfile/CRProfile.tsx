import { FormEvent, useState } from "react"
import { Company, Field } from "../../../model";
import { companyList } from "../../../data";
import "./CRProfile.css";

const CRProfile = () => {
    const [image, setImage] = useState('');
    const [companyField, setCompanyField] = useState<Field[]>([]);
    const [fields, setFields] = useState<Field[]>([]);
    const [company, setCompany] = useState<Company>(companyList[0]);


    const addNewField = () => {

    }
    const updateCompanySubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    const imageOnChange = (e: HTMLInputElement) => {
    }
    const removeField = (field: Field) => { }
    const fieldOnChange = (oldField: Field, newFieldID: number) => {

    }
    return (
        <div id='CRProfile'>
            <div id="content">
                <form onSubmit={updateCompanySubmit}>
                    <div className="company-profile">
                        <div className="company-logo col-left">
                            <img src={image} alt="" />
                        </div>
                        <div className="company-profile-info col-right">
                            <div className="block">
                                <div className="logo">
                                    <input className="edit-logo" type="file" accept='image' name='image' onChange={(e) => imageOnChange(e.target)} />
                                </div>
                                <div className="industry-list">
                                    {
                                        companyField.map(item =>
                                            <div className="middle">
                                                <i className="fas fa-minus-circle industry-sub" onClick={() => removeField(item)}></i>
                                                <select className="industry-item" value={item.fieldID} onChange={(e) => fieldOnChange(item, parseInt(e.target.value))}>
                                                    {
                                                        fields.map(field =>
                                                            <option value={field.fieldID}>{field.fieldName}</option>
                                                        )
                                                    }
                                                </select>
                                            </div>
                                        )
                                    }
                                    <div className="block industry-add">
                                        <i className="fas fa-plus-circle" onClick={addNewField}></i>
                                    </div>

                                </div>
                            </div>
                            <div className="row-profile">
                                <span>Company name</span>
                                <input className="col-info" name='companyname' required defaultValue={company?.companyName}></input>
                            </div>
                            <div className="row-profile">
                                <span>Website</span>
                                <input className="col-info website" type='url' required name='website' defaultValue={company?.webSite}></input>
                            </div>
                        </div>
                    </div>
                    <div className="company-detail clear">
                        <input type="hidden" name='email' defaultValue={company?.email} />
                        <div className="divide">
                            <div className="divide-name">contact information</div>
                            <div className="divide-line"></div>
                        </div>
                        <div className="row-detail clear">
                            <span>Phone</span>
                            <input className="col-input" type="text" pattern='\d+' minLength={10} maxLength={10} name='phone' required defaultValue={company?.phone} />
                        </div>
                        <div className="row-detail clear">
                            <span>Workplace</span>
                            <input className="col-input" type="text" name='address' required defaultValue={company?.address} />
                        </div>
                        <div className="row-detail clear">
                            <span>Company email</span>
                            <h5 className="col-input">{company?.email}</h5>
                        </div>
                        <div className="divide">
                            <div className="divide-name">introduction</div>
                            <div className="divide-line"></div>
                        </div>
                        <div className="row-profile">
                            <textarea name="introduction" defaultValue={company?.introduction} rows={10}></textarea>
                        </div>
                        <div className="divide">
                            <div className="divide-name">Job posison</div>
                            <div className="divide-line"></div>
                        </div>
                        <div className="row-profile">
                            <textarea name="applyposition" defaultValue={company?.applyPosition} rows={10}></textarea>
                        </div>
                        <div className="divide">
                            <div className="divide-name">description</div>
                            <div className="divide-line"></div>
                        </div>
                        <div className="row-profile">
                            <textarea name="description" defaultValue={company?.description} rows={10}></textarea>
                        </div>
                        <div className="btn-interact">
                            <button className="btn btn-save" type='submit'>Save changes</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CRProfile