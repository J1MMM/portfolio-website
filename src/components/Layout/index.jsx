import { Outlet } from 'react-router-dom';
import './index.scss'
import Sidebar from '../Sidebar';

const Layout = () => {
    return (
        <div className='layout'>
            <Sidebar/>
            <div className='page container'>
                <span className='tags top-tags'>&#60;body&#62;</span>
                
                <Outlet/>
                
                <span className='tags bottom-tags'>&#60;&#47;body&#62;
                <br/>
                <span className='html-bottom-tags'>&#60;&#47;html&#62;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout;