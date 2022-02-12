import React, { createContext, useState } from 'react';

export const MenuContext = createContext({
    isMenuOpen: true,
    toggleMenu: () => {},
});

export const NavState = ({ children }) => {
    const [isMenuOpen, toggleMenu] = useState(false);

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>{children}</MenuContext.Provider>
    );
};

