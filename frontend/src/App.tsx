import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/modules/pagecomponents/Header/Header';
import Footer from './components/modules/pagecomponents/Footer/Footer';
import Index from './components/pages/Index/Index';
import { ResponseData, Roles, User } from './model';
import StudentHeader from './components/modules/pagecomponents/StudentHeader/StudentHeader';
import AdminHeader from './components/modules/pagecomponents/AdminHeader/AdminHeader';
import CRHeader from './components/modules/pagecomponents/CRHeader/CRHeader';
import { StudentRoute } from './route';
import StudentViewCompany from './components/pages/StudentViewCompany/StudentViewCompany';
import StudentProfile from './components/pages/StudentProfile/StudentProfile';
import AdminViewStudent from './components/pages/Admin/AdminViewStudent/AdminViewStudent';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import CRListStudent from './components/pages/CRListStudent/CRListStudent';
import CRSInfor from './components/pages/CRStudentInfor/CRSInfor';
import CRProfile from './components/pages/CRProfile/CRProfile';
import CRAppList from './components/pages/CRAppList/CRAppList';
const App: React.FC = () => {
  const user = useSelector((state: any) => state.auth.login.currentUser);

  return (
    <BrowserRouter>
      {(() => {
        console.log(user);
        switch (user?.roleID) {
          case Roles.Student:
            return <StudentHeader setUser={user} />;
          case Roles.Admin:
            return <AdminHeader setUser={user} />;
          case Roles.CR:
            return <CRHeader setUser={user} />;
          default:
            return <Header setUser={user} />
        }
      })()}
      <Routes>
        <Route path='/student/companies' element={<StudentViewCompany />}></Route>
        <Route path='/student/profile' element={<StudentProfile />}></Route>
        <Route path='/cre/manage/students/1' element={<AdminViewStudent />}></Route>
        <Route path='/cr/students' element={<CRListStudent />}></Route>
        <Route path='/cr/profile' element={<CRProfile />}></Route>
        <Route path='/cr/requests' element={<CRAppList />}></Route>
        <Route path='/cr/student-profile' element={<CRSInfor />}></Route>
        <Route path='/' element={<Index></Index>}></Route>;
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
