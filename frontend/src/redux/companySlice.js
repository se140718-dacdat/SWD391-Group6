import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name: "company",
    initialState: {
        company: {
            company: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getCompanyStart: (state) => {
            state.company.isFetching = true;
        },
        getCompanySuccess: (state, action) => {
            state.company.isFetching = false;
            state.company.company = action.payload;
            state.company.error = false;
        },
        getCompanyFailed: (state) => {
            state.company.isFetching = false;
            state.company.error = true;
        },
        getCompanyListStart: (state) => {
            state.company.isFetching = true;
        },
        getCompanyListSuccess: (state, action) => {
            state.company.isFetching = false;
            state.company.companies = action.payload;
            state.company.error = false;
        },
        getCompanyListFailed: (state) => {
            state.company.isFetching = false;
            state.company.error = true;
        },
    }
});

export const {
    getCompanyStart,
    getCompanySuccess,
    getCompanyFailed,
    getCompanyListStart,
    getCompanyListSuccess,
    getCompanyListFailed
} = companySlice.actions;

export default companySlice.reducer;