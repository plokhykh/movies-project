import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import { MenuContext } from '../context';
import {useOnClickOutside} from '../hooks';
import {HamburgerButton, SideMenu} from './index';
import logo from '../images/logo.svg';


const Navbar = styled.div`
  display: flex;
  position: relative;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: var(--dark-bg-color);
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
`;

const Logo = styled.img`
  height: 20px;
  padding: 30px;
`;

export const MainMenu = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <header ref={node}>
            <Navbar>
                <HamburgerButton />
                <Link to={'/'}>
                    <Logo src={logo} alt="Logo"/>
                </Link>

            </Navbar>
            <SideMenu/>
        </header>
    );
};


