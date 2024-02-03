import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container>
        <Navbar.Brand href="/" className='logo-object'>
            <img src='/logo.svg' alt='logo' className='logo-icon'></img>
            <h1 className='logo-text'>REINO</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-end">
            <Nav className='me-auto' />
          <Nav className='navbar-text'>
            <Nav.Link href="https://reino-research.netlify.app">Research</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;