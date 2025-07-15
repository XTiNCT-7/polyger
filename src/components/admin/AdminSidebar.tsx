import Link from 'next/link';
import { adminMenuItems } from '@/utils/constants';
import './AdminSidebar.module.css';

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Polyger Admin</h2>
      </div>
      <nav className="sidebar-nav">
        <ul className="menu-list">
          {adminMenuItems.map((item) => (
            <li key={item.name} className="menu-item">
              <Link href={item.path} className="menu-link">
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;