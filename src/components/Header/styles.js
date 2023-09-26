import styled from "styled-components";

export const C_Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.branco};
  height: 96px;
  a {
    text-decoration: none;
  }
`;
