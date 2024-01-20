import { Menu } from 'antd';
import { HomeOutlined, BranchesOutlined, AreaChartOutlined, AppstoreOutlined, DollarOutlined , BarsOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';



const MenuList = ({ darkTheme }) => {
    return (
        <>
        
        <Menu className='menu-bar' mode='inline' theme={darkTheme ? "dark" : "light"}>
            <Menu.Item key="Dashboard" icon={<HomeOutlined />}>
            <Link to={'/Dashboard'}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="Mark Attendance" icon={<AppstoreOutlined />}>
            <Link to={'/MarkAttendence'}>MarkAttendence</Link>
            </Menu.Item>
            <Menu.Item key="View Attendance" icon={<BranchesOutlined />}>
            <Link to={'/ViewAttendence'}>ViewAttendence</Link>
            </Menu.Item>
            <Menu.Item key="Reports" icon={<AreaChartOutlined />}>
            <Link to={'/Reports'}>Reports</Link>
            </Menu.Item>
            <Menu.Item key="Fine" icon={<DollarOutlined />}>
            <Link to={'/Fine'}>Fine</Link>
            </Menu.Item>
            <Menu.SubMenu key="Classes" icon={<BarsOutlined />} title="Classes">
                <Menu.SubMenu key="1st-Year" title="1st-Year">
                    <Menu.Item key="Section A">
                    <Link to="/classes/first-Year/section-A">Section A</Link>
                    </Menu.Item>
                    <Menu.Item key="Section B">
                    <Link to="/classes/first-Year/section-B">Section B</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="2nd-Year" title="2nd-Year">
                    <Menu.Item key="Section A">
                    <Link to="/classes/second-Year/section-A">Section A</Link>
                    </Menu.Item>
                    <Menu.Item key="Section B">
                    <Link to="/classes/second-Year/section-B">Section B</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="3rd-Year" title="3rd-Year">
                    <Menu.Item key="Section A">
                    <Link to="/classes/third-Year/section-A">Section A</Link>
                    </Menu.Item>
                    <Menu.Item key="Section B">
                    <Link to="/classes/third-Year/section-B">Section B</Link>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu key="Students" icon={<BarsOutlined />} title="Students">
            <Menu.Item key='Add Student'>
            <Link to="/Students/Addstudent">AddStudent</Link>
          </Menu.Item>
                <Menu.Item key="Modify Student">
                <Link to="/Students/modify-Student">ModifyStudent</Link>
                </Menu.Item>
                <Menu.Item key="Delete Student">
                <Link to="/Students/delete-Student">DeleteStudent</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="User" icon={<BarsOutlined />} title="Users">
                <Menu.Item key="Add User">
                <Link to="/Users/add-User">AddUser</Link>
                </Menu.Item>
                <Menu.Item key="Modify User">
                <Link to="/Users/modify-User">ModifyUser</Link>
                </Menu.Item>
                <Menu.Item key="Delete User">
                <Link to="/Users/delete-User">DeleteUser</Link>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
        </>
    );
};

export default MenuList;