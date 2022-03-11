import React from 'react';
import './style.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
return(
<>
<Navbar bg='dark' variant="dark" className='shadow fixed-top'>
  <Container>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/projects'>Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
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
)};
export default NavBar;


// { "foreground": "#f6c177" } - gold
// "foreground": "#ebbcba" - pink (main quotes)
