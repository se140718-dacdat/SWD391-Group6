import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: "student",
    initialState: {
        student: {
            student: null,
            isFetching: false,
            error: false
        }
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
    }
});

export const {
    getStudentStart,
    getStudentSuccess,
    getStudentFailed
} = studentSlice.actions;

export default studentSlice.reducer;