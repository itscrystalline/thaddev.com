import styled from "styled-components";

export const BoxImage = styled.div`
  background: #076bff;
  border-radius: 12px;
  display: compact;
  padding: 24px;
  align-items: center;

  @media ${props => props.theme.breakpoints.sm} {
    &:nth-child(2n){
      grid-row:2;
    }
  }
`