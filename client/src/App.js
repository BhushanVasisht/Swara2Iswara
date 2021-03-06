import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Performances from "./components/performances/Performances";
import Compositions from "./components/compositions/Compositions";
import RagaView from "./components/ragas/RagaView";

function App() {

    return (
        <div>
            <div id={"navbar"}>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Swara2Iswara</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/timeline">Timeline</Nav.Link>
                                <NavDropdown title="Services" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/ragas">Ragas</NavDropdown.Item>
                                    <NavDropdown.Item href="/compositions">Compositions</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/performances">Performances</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/gamakas">Gamakas</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link href={"mailto:vasishtbs95@gmail.com"} onClick={() => window.open("mailto:vasishtbs95@gmail.com")}>@author: Bhushan Vasisht</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Routes>
                <Route exact path="" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/compositions" element={<Compositions/>} />
                <Route exact path="/performances" element={<Performances />} />
                <Route exact path="/ragas" element={<RagaView />} />
            </Routes>
        </div>
    );
}

export default App
