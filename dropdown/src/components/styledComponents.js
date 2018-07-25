import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const MenuContent = styled.div`
  position: absolute;
  margin-top: 12px;
  width: 100%;
  height: 100%;
  border: solid 1px black;
  border: 1px solid #e0e0e0;
  padding: 13px 23px;
  text-align: left;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 8px;
    width: 0;
    height: 0;
    border-style: solid;
    top: -22px;
    border-color: transparent transparent #e0e0e0;
    border-width: 11px;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 9px;
    width: 0;
    height: 0;
    border-style: solid;
    top: -20px;
    border-color: transparent transparent white;
    border-width: 10px;
  }
`;

export const MenuButton = styled.button`
  outline: none !important;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: 5px 0;
  margin: 0 30px;

  &:first-child {
    margin-left: 0;
  }
  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    margin-right: 20px;
  }
`;

export const TextOfButton = styled.div`
  text-transform: uppercase;
  color: #4e117a;
  font-weight: bold;
  font-size: 16px;
  padding-right: 15px;

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    font-size: 11px;
    padding-right: 7.5px;
  }
`;
