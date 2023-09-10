import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Route, Routes, NavLink } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Categories from "./pages/Categories";
import Customers from "./pages/Customers";
import Inventory from "./pages/Inventory";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function SideBar({ openSideBarToggle, OpenSideBar }) {
  return (
    <aside
      id="sidebar"
      className={openSideBarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" />
          Shop
        </div>
        <span className="icon close_icon" onClick={OpenSideBar}>
          x
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <NavLink to="/dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/products">
            <BsFillArchiveFill className="icon" /> Products
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/categories">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/customers">
            <BsPeopleFill className="icon" /> Customers
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/inventory">
            <BsListCheck className="icon" /> Inventory
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/reports">
            <BsMenuButtonWideFill className="icon" /> Reports
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink to="/settings">
            <BsFillGearFill className="icon" /> Settings
          </NavLink>
        </li>
      </ul>

      <Routes>
        {/* <Route path="/" element={<SideBar />}></Route> */}
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/reports" element={<Reports />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </aside>
  );
}

export default SideBar;
