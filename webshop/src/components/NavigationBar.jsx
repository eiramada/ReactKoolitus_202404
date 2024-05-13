import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationBar() {
  const { t, i18n } = useTranslation();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang); //lang peab olema sama, mis i18n.js failis
    localStorage.setItem("lang", lang);
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {t("homepage")}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/shops">
              {t("nav.shops")}
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              {t("nav.cart")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              {t("contact-us")}
            </Nav.Link>

            <NavDropdown title="Admin" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/admin">
                {t("nav.admin")}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/maintain-products">
                {t("maintain-products")}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin/add-product">
                {t("add-product")}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/login">
              {t("login")}
            </Nav.Link>

            <Nav.Link as={Link} to="/signup">
              {t("signup")}
            </Nav.Link>

            <img
              className="lang"
              onClick={() => changeLanguage("ee")}
              src="/estonia.png"
              alt=""
            />

            <img
              className="lang"
              onClick={() => changeLanguage("en")}
              src="/united-kingdom.png"
              alt=""
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
