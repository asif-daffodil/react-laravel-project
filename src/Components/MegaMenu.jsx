import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBIcon,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { NavLink, useLocation } from 'react-router-dom';

export default function MegaMenu() {
  const [showBasic, setShowBasic] = useState(false);
  let location = useLocation();
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer>
        <MDBNavbarBrand to="">Rakugroupbd</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav
            className="me-auto ps-lg-0 position-relative"
            style={{ paddingLeft: '0.15rem' }}
          >
            <MDBNavbarItem>
              <NavLink
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? { fontWeight: 'bolder' } : { color: 'gray' }
                }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/about"
                style={({ isActive }) =>
                  isActive ? { fontWeight: 'bolder' } : { color: 'gray' }
                }
              >
                About
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className={`nav-link ${
                    location.pathname === '/car-import' ||
                    location.pathname === '/student-consultancy' ||
                    location.pathname === '/tours-and-travles' ||
                    location.pathname === '/air-tickting'
                      ? 'fw-bolder'
                      : null
                  }`}
                  role="button"
                >
                  Services
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <NavLink className="dropdown-item" to="/car-import">
                    Car import
                  </NavLink>
                  <NavLink className="dropdown-item" to="/student-consultancy">
                    Student Consultancy
                  </NavLink>
                  <NavLink className="dropdown-item" to="/tours-and-travles">
                    Tours and Travles
                  </NavLink>
                  <NavLink className="dropdown-item" to="/air-tickting">
                    Air tickting
                  </NavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Visa
                </MDBDropdownToggle>
                <MDBDropdownMenu
                  className="mt-0 vw-100 justify-content-center"
                  style={{
                    borderTopLeftRadius: '0',
                    borderTopRightRadius: '0',
                  }}
                >
                  <MDBContainer>
                    <MDBRow className="my-4">
                      <MDBCol md="6" lg="3" className="mb-3 mb-lg-0">
                        <MDBListGroup flush="true">
                          <MDBListGroupItem
                            className="text-uppercase"
                            tag="a"
                            to=""
                            action
                          >
                            Student visa
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />{' '}
                            Student visa in Japan
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />
                            Student visa in UK
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />
                            Student visa in India
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />
                            Student visa in Malaysia
                          </MDBListGroupItem>
                        </MDBListGroup>
                      </MDBCol>
                      <MDBCol md="6" lg="3" className="mb-3 mb-lg-0">
                        <MDBListGroup flush="true">
                          <MDBListGroupItem
                            className="text-uppercase"
                            tag="a"
                            to=""
                            action
                          >
                            Tourist visa
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />{' '}
                            Tourist visa in Japan
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />
                            Tourist visa in India
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />{' '}
                            Tourist visa in Singapur
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />{' '}
                            Tourist visa in Malaysia
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />{' '}
                            Tourist visa in Thailand
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />{' '}
                            Tourist visa in Europe
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />{' '}
                            Tourist visa in Canada
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />{' '}
                            Tourist visa in Aujstralia
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" />{' '}
                            Tourist visa in USA
                          </MDBListGroupItem>
                        </MDBListGroup>
                      </MDBCol>
                      <MDBCol md="6" lg="3" className="mb-3 mb-md-0">
                        <MDBListGroup flush="true">
                          <MDBListGroupItem
                            className="text-uppercase"
                            tag="a"
                            to=""
                            action
                          >
                            Job visa
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" /> Cras
                            Job visa in Japan
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" /> Job
                            visa in UK
                          </MDBListGroupItem>
                        </MDBListGroup>
                      </MDBCol>
                      <MDBCol md="6" lg="3">
                        <MDBListGroup flush="true">
                          <MDBListGroupItem
                            className="text-uppercase"
                            tag="a"
                            to=""
                            action
                          >
                            SSW visa
                          </MDBListGroupItem>
                          <MDBListGroupItem tag="a" to="" action>
                            <MDBIcon icon="caret-right" className="pe-2" /> SSW
                            visa in Japan
                          </MDBListGroupItem>
                        </MDBListGroup>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className={`nav-link ${
                    location.pathname === '/courses' ||
                    location.pathname === '/gallery' ||
                    location.pathname === '/team'
                      ? 'fw-bolder'
                      : null
                  }`}
                  role="button"
                >
                  Pages
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <NavLink className="dropdown-item" to="/courses">
                    Courses
                  </NavLink>
                  <NavLink className="dropdown-item" to="/gallery">
                    Gallery
                  </NavLink>
                  <NavLink className="dropdown-item" to="/team">
                    Our Team
                  </NavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/contact"
                style={({ isActive }) =>
                  isActive ? { fontWeight: 'bolder' } : { color: 'gray' }
                }
              >
                Contact
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/blog"
                style={({ isActive }) =>
                  isActive ? { fontWeight: 'bolder' } : { color: 'gray' }
                }
              >
                Blog
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
