import styled from "styled-components";

const Container = styled.section`
  position: relative;
  background-color: #181818;
  border-radius: 12px;

  transition: border-radius 0.25s ease-in-out;

  &.hide-radius {
    border-radius: 0 0 12px 12px;
  }
`;

export default Container;
