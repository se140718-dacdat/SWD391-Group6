import { createSlice } from "@reduxjs/toolkit";

const recruitmentSlice = createSlice({
    name: "recruitment",
    initialState: {
        recruitment: {
            recruitments: null,
            isFetching: false,
            error: false
        },
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
    }
});

export const {
    getRecruitmentListStart,
    getRecruitmentListSuccess,
    getRecruitmentListFailed
} = recruitmentSlice.actions;

export default recruitmentSlice.reducer;