import React from 'react';
import {
	toggleColorMode,
	useColorMode,
	useColorModeValue,
	Link,
	Flex,
	IconButton,
	Spacer,
} from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

import './style.css';

const NavBar = () => {
	const { toggleColorMode } = useColorMode();
	const bg = useColorModeValue('#FFF', '');
	return (
		<>
			<Flex bg="dark" w="100%" h="60px" boxShadow="lg">
				<Link>
					<NavLink className="link" exact to="/" activeClassName="active">
						Home
					</NavLink>
				</Link>
				<Link>
					<NavLink className="link" to="/projects" activeClassName="active">
						Projects
					</NavLink>
				</Link>
				<Spacer />
				<IconButton
					icon={<MoonIcon />}
					variant="ghost"
					onClick={toggleColorMode}
					mt={2}
					mx={4}
				/>
			</Flex>

			{/* <Navbar inverse bg='dark' variant="dark" className='shadow fixed-top'>
  <Container>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav>
        <Nav.Link>
        </Nav.Link> 
        <Nav.Link>
        </Nav.Link> 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
			{/* <nav className='navbar fixed-top shadow bg-dark' role="navigation">
  <div className='container-fluid'>
    <div className='nav-brand'>
      {/* <h1 className="title is-inline is-info">Portfolio</h1> }
    </div>
    <div className='navbar-brand'>
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
          <a className='nav-link links' href="#">Home</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link navbar-item links' href="#">Projects</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
		</>
	);
};
export default NavBar;

// { "foreground": "#f6c177" } - gold
// "foreground": "#ebbcba" - pink (main quotes)
