import React, { Component } from "react";
import {
  DropdownContainer,
  MenuButton,
  MenuContent,
  TextOfButton
} from "./styledComponents";

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
  }

  toggle = () => {
    this.setState((prevState) => ({ isToggle: !prevState.isToggle }));
  };

  render() {
    return (
      <DropdownContainer>
        <MenuButton onClick={this.toggle}>
          <TextOfButton>Menu</TextOfButton>
        </MenuButton>

        {this.state.isToggle && (
          <MenuContent>
            <div>thuong</div>
          </MenuContent>
        )}
      </DropdownContainer>
    );
  }
}

export default Dropdown;
