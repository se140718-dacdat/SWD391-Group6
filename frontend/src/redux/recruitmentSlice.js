import { createSlice } from "@reduxjs/toolkit";

const recruitmentSlice = createSlice({
    name: "recruitment",
    initialState: {
        recruitment: {
            recruitments: null,
            isFetching: false,
            response: null,
            responseUpdate: null,
            error: false
        }
    },
    reducers: {
        getRecruitmentListStart: (state) => {
            state.recruitment.isFetching = true;
        },
        getRecruitmentListSuccess: (state, action) => {
            state.recruitment.isFetching = false;
            state.recruitment.recruitments = action.payload;
            state.recruitment.error = false;
        },
        getRecruitmentListFailed: (state) => {
            state.recruitment.isFetching = false;
            state.recruitment.error = true;
        },
        recruitmentStart: (state) => {
            state.recruitment.isFetching = true;
        },
        recruitmentSuccess: (state, action) => {
            state.recruitment.isFetching = false;
            state.recruitment.response = action.payload;
            state.recruitment.error = false;
        },
        recruitmentFailed: (state) => {
            state.recruitment.isFetching = false;
            state.recruitment.error = true;
        },
        recruitmentUpdateStart: (state) => {
            state.recruitment.isFetching = true;
        },
        recruitmentUpdateSuccess: (state, action) => {
            state.recruitment.isFetching = false;
            state.recruitment.responseUpdate = action.payload;
            state.recruitment.error = false;
        },
        recruitmentUpdateFailed: (state) => {
            state.recruitment.isFetching = false;
            state.recruitment.error = true;
        }
    }
});

export const {
    getRecruitmentListStart,
    getRecruitmentListSuccess,
    getRecruitmentListFailed,
    recruitmentStart,
    recruitmentSuccess,
    recruitmentFailed,
    recruitmentUpdateStart,
    recruitmentUpdateSuccess,
    recruitmentUpdateFailed
} = recruitmentSlice.actions;

export default recruitmentSlice.reducer;