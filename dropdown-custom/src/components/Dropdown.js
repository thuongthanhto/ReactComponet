import React, { Component } from "react";
import Select, { components } from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate", name: "1" },
  { value: "strawberry", label: "Strawberry", name: "2" },
  { value: "vanilla", label: "Vanilla", name: "3" }
];

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {console.log(props)}
        {props.selectProps.menuIsOpen && (
          <img width="25px" height="25px" src="./chevron-up.svg" />
        )}
        {!props.selectProps.menuIsOpen && (
          <img width="25px" height="25px" src="./chevron-down.png" />
        )}
      </components.DropdownIndicator>
    )
  );
};

const IndicatorSeparator = props => null;

const CustomOption = ({ data, innerProps, isDisabled }) =>
  !isDisabled ? (
    <div {...innerProps}>
      <div>{data.label}</div>
      <div>{data.name}</div>
    </div>
  ) : null;

const SingleValue = ({ data, children, ...props }) => (
  <components.SingleValue {...props}>
    <div>{data.label}</div>
    <div>{data.name}</div>
  </components.SingleValue>
);
class Dropdown extends Component {
  render() {
    return (
      <Select
        components={{
          DropdownIndicator,
          IndicatorSeparator,
          Option: CustomOption,
          SingleValue
        }}
        options={options}
      />
    );
  }
}

export default Dropdown;
