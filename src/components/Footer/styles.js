import styled from "styled-components";

export const C_Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.branco};
  color: ${(props) => props.theme.colors.preto};
  /* padding: 0.5rem 0; */
  #footerLogo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 425px;
    margin: 0.5rem auto;
    #contato {
      display: flex;
      flex-direction: column;

      a {
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme.colors.azul};
        font-weight: 600;
        text-decoration: none;
      }
    }
  }
  #horario,
  #direito,
  #desenvolvido {
    padding: 0.5rem 0;
    text-align: center;
  }

  #horario {
    p {
      margin-bottom: 0.3rem;
      font-weight: 600;
    }
  }

  #localizacao {
    padding: 0.5rem 0 0.8rem 1rem;
    margin: 0 auto;
    max-width: 425px;
    font-weight: 600;

  }

  #direito {
    background-color: ${(props) => props.theme.colors.azul};
  }

  #desenvolvido {
    background-color: ${(props) => props.theme.colors.cinza};
    color: ${(props) => props.theme.colors.branco};
  }
`;
