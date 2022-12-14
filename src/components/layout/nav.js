import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from '../home/Home';
import Portfolio from '../portfolio/Portfolio';
import logo from "../../images/Portfolio-icon.png"



function Layout() {
  return (
    <Router>
      <Navbar expand="lg">
        <NavLink to="/" exact>
          <Navbar.Brand> <img src={logo} alt="sneek peak of project"/></Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/portfolio" className="nav-link">
              Portfolio
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default Layout;