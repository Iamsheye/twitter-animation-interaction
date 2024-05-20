import styled from "styled-components";

const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px;
  font-size: 0.875rem;

  color: #d8d8d8;
  background-color: #3e4144;

  &.failed {
    color: crimson;
    background-color: #ed143d75;
  }

  transition-property: background-color, color;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
`;

export default Button;
