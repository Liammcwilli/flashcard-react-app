import React from 'react';
import { Route, Link, Routes, } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import ROUTES from "./app/routes";
import {NavBar, Homepage, Topics, NewTopicForm, Topic, Quizzes, NewQuizForm, Quiz} from './components'
import './App.css'


function App() {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
        <div className="main">
          <Layout>
            <div className="Routes">
                <Routes>
                  <Route path="/" element={<Homepage />}>
                  </Route>
                  <Route path="topics" element={<Topics />} >
                  </Route>
                  <Route path="topics/new" element={<NewTopicForm />} >
                  </Route>
                  <Route path="topics/:topicId" element={<Topic />} >
                  </Route>
                  <Route path="quizzes" element={<Quizzes />} >
                  </Route>
                  <Route path="quizzes/new" element={<NewQuizForm />} >
                  </Route>
                  <Route path="quizzes/:quizId" element={<Quiz />} >
                  </Route>
                </Routes> 
            </div>
          </Layout>
          <div className='footer' level={5}>
          <Typography.Title style={{ color: 'white', textAlign: 'center'}}>
            QuizBuddy <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link className='iconlink' to="/">Home</Link>
          </Space>
          <Space>
            <Link className='iconlink' to="/topics">Topics</Link>
          </Space>
          <Space>
            <Link className='iconlink' to='/quizzes'>Quizzes</Link>
          </Space>
          <Space>
            <Link className='iconlink' to={ROUTES.newQuizRoute()}>NewQuiz</Link>
          </Space>
          </div>
       </div>
    </div>
  );
}


export default App;
