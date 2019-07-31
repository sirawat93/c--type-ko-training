import * as React from "react";
import "./SideBar.scss";

const Sidebar: React.StatelessComponent<{}> = () => {
    return (
        <nav className="sidebar">
            <p className="SideNav__Title">creatitve</p>
            <ul className="SideNav">
                <li>
                    <a href="#" className="SideNav__Link">
                        <i className="SideNav__Icon fa fa-table"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="SideNav__Link">
                        <i className="SideNav__Icon fa fa-user"></i>
                        <span>User Profile</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="SideNav__Link">
                        <i className="SideNav__Icon fa fa-clipboard"></i>
                        <span>Table List</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="SideNav__Link">
                        <i className="SideNav__Icon fa fa-file-text-o"></i>
                        <span>Typography</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="SideNav__Link">
                        <i className="SideNav__Icon fa fa-circle"></i>
                        <span>Icons</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="SideNav__Link">
                        <i className="SideNav__Icon fa fa-map-marker"></i>
                        <span>Maps</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="SideNav__Link">
                        <i className="SideNav__Icon fa fa-bell"></i>
                        <span>Notifications</span>
                    </a>
                </li>
            </ul>

            <div className="Legal">
                <i className="SideNav__Icon fa fa-level-up"></i>
                <span>Upgrade to PRO</span>
            </div>
        </nav>
    );
}

export default Sidebar;