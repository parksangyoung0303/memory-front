import React from 'react'
import { Outlet } from 'react-router'

import './style.css';

// 파일명에 index를 붙이면 기본 파일로 적용되어 App.tsx에서 보면 './layouts/Layout'; 이렇게 잡힘

export default function index() {
  return (
    <div>
        <Outlet />
    </div>
  )
}
