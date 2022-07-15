import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess } from "./authSlice";
import { getCompanyFailed, getCompanyListStart, getCompanyListSuccess, getCompanyStart, getCompanySuccess } from "./companySlice";
import { getRecruitmentListFailed, getRecruitmentListStart, getRecruitmentListSuccess, recruitmentFailed, recruitmentStart, recruitmentSuccess, recruitmentUpdateFailed, recruitmentUpdateStart, recruitmentUpdateSuccess } from "./recruitmentSlice";
import { getStudentFailed, getStudentListStart, getStudentListSuccess, getStudentStart, getStudentSuccess } from "./studentSlice";
import { getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice";
import { Recruitment } from "../model";

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8000/api/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch (err) {
        dispatch(loginFailed());
    }
};

export const createRecruitment = async(dispatch, recruitment) => {
    dispatch(recruitmentStart());
    try {
        const res = await axios.post("http://localhost:8000/api/recruitment/create-recruitment", recruitment);
        dispatch(recruitmentSuccess(res.data));
    } catch (err) {
        dispatch(recruitmentFailed());
    }
}

export const updateRecruitment = async(dispatch, studentID, recruitmentStatus) => {
    dispatch(recruitmentUpdateStart());
    try {
        const res = await axios.post(`http://localhost:8000/api/recruitment/update/${studentID}/${recruitmentStatus}`);
        dispatch(recruitmentUpdateSuccess(res.data));
    } catch (err) {
        dispatch(recruitmentUpdateFailed());
    }
}

export const logoutUser = async(dispatch, id, navigate, accessToken) => {
    dispatch(logoutStart());
    try {
        const res = await axios.post("http://localhost:8000/api/auth/logout", id, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(logoutSuccess());
        navigate("/");
    } catch (err) {
        dispatch(logoutFailed());
    }
}

export const getAllUsers = async(accessToken, dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get("http://localhost:8000/api/user", {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailed());
    }
}

export const getStudent = async(dispatch, username) => {
    dispatch(getStudentStart());
    try {
        const res = await axios.get(`http://localhost:8000/api/student/${username}`);
        dispatch(getStudentSuccess(res.data));
    } catch (err) {
        dispatch(getStudentFailed());
    }
}

export const getStudentList = async(dispatch) => {
    dispatch(getStudentListStart());
    try {
        const res = await axios.get("http://localhost:8000/api/student/get-all-student");
        dispatch(getStudentListSuccess(res.data));
    } catch (err) {
        dispatch(getStudentFailed());
    }
}

export const getCompany = async(dispatch, companyID) => {
    dispatch(getCompanyStart());
    try {
        const res = await axios.get(`http://localhost:8000/api/company/${companyID}`);
        dispatch(getCompanySuccess(res.data));
    } catch (err) {
        dispatch(getCompanyFailed());
    }
}

export const getCompanyList = async(dispatch) => {
    dispatch(getCompanyListStart());
    try {
        const res = await axios.get("http://localhost:8000/api/company/get-all-company");
        dispatch(getCompanyListSuccess(res.data));
    } catch (err) {
        dispatch(getCompanyFailed());
    }
}

export const getRecruitmentList = async(dispatch, companyID) => {
    dispatch(getRecruitmentListStart());
    try {
        const res = await axios.get(`http://localhost:8000/api/recruitment/${companyID}`);
        dispatch(getRecruitmentListSuccess(res.data));
    } catch (err) {
        dispatch(getRecruitmentListFailed());
    }
}