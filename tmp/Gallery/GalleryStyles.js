import styled from "styled-components";

export const BoxImage = styled.div`
  background: #076bff;
  border-radius: 12px;
  display: compact;
  padding: 24px;
  align-items: center;

  @media ${props => props.theme.breakpoints.sm} {
    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`

export const CollapsableBackground = styled.div`
  border-radius: 25px;
  background: #252525;
  padding: 20px;
  transition: 0.25s ease-in-out;

  &:hover {
    background: #272727;
  }

  &:active {
    background: #2a2a2a;
  }
`;