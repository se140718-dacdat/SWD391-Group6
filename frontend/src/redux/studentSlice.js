import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: "student",
    initialState: {
        student: {
            student: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getStudentStart: (state) => {
            state.student.isFetching = true;
        },
        getStudentSuccess: (state, action) => {
            state.student.isFetching = false;
            state.student.student = action.payload;
            state.student.error = false;
        },
        getStudentFailed: (state) => {
            state.student.isFetching = false;
            state.student.error = true;
        },
        getStudentListStart: (state) => {
            state.student.isFetching = true;
        },
        getStudentListSuccess: (state, action) => {
            state.student.isFetching = false;
            state.student.students = action.payload;
            state.student.error = false;
        },
        getStudentListFailed: (state) => {
            state.student.isFetching = false;
            state.student.error = true;
        },
    }
});

export const {
    getStudentStart,
    getStudentSuccess,
    getStudentFailed,
    getStudentListStart,
    getStudentListSuccess,
    getStudentListFailed
} = studentSlice.actions;

export default studentSlice.reducer;