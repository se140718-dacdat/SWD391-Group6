import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess } from "./authSlice";
import { getStudentFailed, getStudentStart, getStudentSuccess } from "./studentSlice";
import { getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice";

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