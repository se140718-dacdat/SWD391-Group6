const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const responseDataRoute = require('./routes/responseData');
const userRoute = require('./routes/user');
const studentRoute = require('./routes/student');
const recruitmentRoute = require('./routes/recruitment')
const companyRoute = require('./routes/company');


dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("CONNECTED")
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/responseData", responseDataRoute);
app.use("/api/user", userRoute);
app.use("/api/student", studentRoute);
app.use("/api/recruitment", recruitmentRoute);
app.use("/api/company", companyRoute);

app.listen(8000, () => {
    console.log("Server is running");
})