import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    let oldValue = this.state.isOpen;
    oldValue = !oldValue;
    this.setState({
      isOpen: oldValue,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Components
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/myworks/todolist/">To Do List</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/myworks/group19/">Group19</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/myworks/group15/">Group15</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/myworks/group20/">Group20</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/myworks/group21/">Group21</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/myworks/group22/">Group22</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/myworks/group23/">Group23</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
