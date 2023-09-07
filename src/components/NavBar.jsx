import React from 'react';
import {  Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BarsOutlined, BulbOutlined, SolutionOutlined, PlusCircleOutlined} from '@ant-design/icons';
import ROUTES from "../app/routes";


const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        
        <Avatar className="logoicon" icon={<SolutionOutlined />} size="large"/>
        <Typography.Title level={2} className="logo">
            <Link className='logotext' to="/">QuizBuddy</Link>
        </Typography.Title>
        <Menu theme="dark" className='menu'>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/Topics">Topics</Link>
            </Menu.Item>
            <Menu.Item icon={<BarsOutlined />}>
                <Link to="/Quizzes">Quizzes</Link>
            </Menu.Item>
            <Menu.Item icon={<PlusCircleOutlined />}>
                <Link to={ROUTES.newQuizRoute()}>New Quiz</Link>
            </Menu.Item>

        </Menu>
      </div>
    </div>

  )
}

export default NavBar
