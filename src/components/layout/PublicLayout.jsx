import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './PublicLayout.css';

export default function PublicLayout() {
  return (
    <div className="vt-public-layout">
      <Navbar />
      <main className="vt-main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
