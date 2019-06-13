import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem } from './style';

class Header extends Component {
  render() {
    return ( 
        <div>
        <Logo />
            <HeaderWrapper>
                
                <Nav>
                <NavItem className='left active'>Home</NavItem>
				<NavItem className='right'>Login</NavItem>
                
                </Nav>
            </HeaderWrapper>
            
        </div>
    );
  }
}

export default Header;
