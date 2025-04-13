import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes, useParams} from 'react-router'
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import Free_Course_Page from './Pages/Free_Course_Page';
import Paid_Course_Page from './Pages/Paid_Course_Page';
import Categories_Page from './Pages/Categories_Page';
import ContactPage from './Pages/ContactPage';
import CourseDetail from './components/CourseDetail';
import CourseDetailPage from './Pages/CourseDetailPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <Routes>
    <Route index element={<Home/>} />

    <Route path='/freeCourse' element={<Free_Course_Page/>} >
          {/* <Route path=':courseID' element={<CourseDetail key={()=>useParams()} />} /> */}
    </Route>

    <Route path='/paidCourse' element={<Paid_Course_Page/>} >
         {/* <Route path=':courseID' element={<CourseDetail/>} /> */}
    </Route>
    <Route path='/categories' element={<Categories_Page/>} />
    <Route path='/contact' element={<ContactPage/>} />

    <Route path='/CourseDetail' element={<CourseDetailPage/>} >
    <Route path=':courseID' element={<CourseDetailPage/>} />

    </Route>

  </Routes>
   
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
