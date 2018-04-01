import React from 'react'
import './style.css'
import { Button } from 'antd'

export const Logined = (props) => (
  <div className="container">
    <img src={require('./timg.jpeg')} alt="timg"/>
    <p>欢迎：{props.userInfo.username}</p>
    <p className="centerP">光临博客~</p>
    {props.userInfo.userType === 'admin' ?
      <Button onClick={() => props.history.push('/admin')} type="primary">点击进入管理页面</Button> : null}
  </div>
);