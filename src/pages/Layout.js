import React from 'react';
import {Outlet} from 'react-router-dom';

import {MainMenu} from '../components';
import {NavState} from '../context';


export const Layout = () => {

    return (
        <div>
            <NavState>
                <MainMenu/>
            </NavState>
            <Outlet/>
        </div>
    );
};

