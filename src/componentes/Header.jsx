import React, { useState } from "react";
import { NavItem, NavLink, Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

function Header(props){
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
    return(
      <div >
            <header className="header shadow-lg">
            <h1 id="title">Desenvolvedor Front End</h1>
            <div className="navi">
                <Nav tabs>
                  <NavItem >
                    <NavLink className="text-dark" href="/">
                      Perfil
                    </NavLink>
                  </NavItem>
                  <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle className="text-dark" nav caret>
                      Projetos
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                          <NavLink className="text-dark" href="/Fundamentos">Fundamentos</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                          <NavLink className="text-dark" href="/Front-End">Front-End</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                          <NavLink className="text-dark" href="/Back-End">Back-End</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                      <NavLink className="text-dark" href="/Ciencia_Da_Computacao">Ciência da Computação</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <NavItem>
                    <NavLink className="text-dark" href="/Habilidades">Certificados</NavLink>
                  </NavItem>
                </Nav>
              </div>
            </header>
          </div>
    )
}

export default Header;