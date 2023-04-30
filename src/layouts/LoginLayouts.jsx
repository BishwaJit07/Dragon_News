import React from 'react';
import { Outlet } from 'react-router-dom';
import DragonNavBar from '../pages/Shared/DragonNavBar';

const LoginLayouts = () => {
    return (
        <div>
            <DragonNavBar/>
            <Outlet/>
        </div>
    );
};

export default LoginLayouts;