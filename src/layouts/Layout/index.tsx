import React from 'react';
import { Outlet } from 'react-router';

import './style.css';

// 파일명에 index를 붙이면 기본 파일로 적용되어 App.tsx에서 보면 './layouts/Layout'; 이렇게 잡힘

// component: 공통 레이아웃 컴포넌트 //
export default function Layout() {

  // render: 공통 레이아웃 컴포넌트 렌더링 //
  return (
    <div id='layout-wrapper'>
      <div id='top-bar'>
        <div className='navigation'>
          <div className='title'>Memories</div>
          <div className='navigation-list'>
            <div className='navigation-item active'>기억력 검사</div>
            <div className='navigation-item'>집중력 검사</div>
          </div>
        </div>

        <div className='my-content'>
          <div className='my-content-list'>
            <div className='my-content-item'>일기</div>
            <div className='my-content-item'>로그아웃</div>
          </div>
        </div>
      </div>
      <div id='main'>
        <Outlet />
      </div>
    </div>
  )
}