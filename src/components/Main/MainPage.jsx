import React from 'react';
import './mainPage.css'
import PageTitle from '../Page-Title/PageTitle';
import Dashboard from '../Dashboard/Dashboard';

function MainPage() {
  return (
    <main className="main" id="main">
        {/* <PageTitle page={'Dashboard'}/> */}
        <Dashboard />
    </main>
  )
}

export default MainPage;