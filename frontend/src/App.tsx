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
import _ from 'lodash';
const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    setUser(user);
  }, []);
  return (
    <BrowserRouter>
      {(() => {
        console.log(user);
        switch (user?.roleID) {
          case Roles.Student:
            return <StudentHeader setUser={setUser} />;
          case Roles.Admin:
            return <AdminHeader setUser={setUser} />;
          case Roles.CR:
            return <CRHeader setUser={setUser} />;
          default:
            return <Header setUser={setUser} />
        }
      })()}
      <Routes>
        <Route path='/student/companies' element={<StudentViewCompany />}></Route>
        <Route path='/student/profile' element={<StudentProfile />}></Route>

        <Route path='/' element={<Index></Index>}></Route>;
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}


export default App;
