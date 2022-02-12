import React, {useContext, useEffect} from 'react';
import styled, {css} from 'styled-components';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {MenuContext} from '../context';


const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: scroll;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  width: 250px;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 100px;
  padding-right: 0px;
  align-items: stretch;
  background-color: var(--dark-bg-color);
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;

  ${props =>
          props.open &&
          css`
            transform: translateX(0);
          `}
`;

export const MenuLink = styled(NavLink)`
  position: relative;
  display: flex;
  text-align: left;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 16%;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: var(--text-color);
  font-size: 20px;
  line-height: 120%;
  font-weight: 500;

  :hover {
    background-position: 90% 50%;
    text-decoration: underline var(--second-color);
  }
`;

export const SideMenu = () => {
    const { isMenuOpen } = useContext(MenuContext);
    const { genresList } = useSelector(store => store['genres']);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isMenuOpen]);

    return <Menu open={isMenuOpen}>{genresList.map(item =>
            <MenuLink to={`movies/genres/${item.id.toString()}`} key={item.id}>
                {item.name}
            </MenuLink>
        )}
    </Menu>;
};



