import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;