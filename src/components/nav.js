import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{position:"sticky",top:"0"}}>
<Container>
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="justify-content-end">
    <Nav.Link href="#Home">Home</Nav.Link>
    <Nav.Link href="#Explorations">Explorations</Nav.Link>
    <Nav.Link href="#Interactives">Interactives</Nav.Link>
    <Nav.Link href="#Contact">Contact</Nav.Link>
    <Nav.Link href="#Shop"><i class="fa-solid fa-basket-shopping" style={{color: "#f7f7f8"}}></i></Nav.Link>
  </Nav>
</Container>
</Navbar>
  )
}

export default NavBar