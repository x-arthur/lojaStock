import styled from "styled-components";

export const C_Nav = styled.nav`
  /* background-color: palevioletred; */
  background-color: ${(props) => props.theme.colors.azul};
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  bottom: 0;

  ul {
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 12px;
    list-style: none;

    li {
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${(props) => props.theme.colors.branco};
        text-decoration: none;

        svg {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
`;
