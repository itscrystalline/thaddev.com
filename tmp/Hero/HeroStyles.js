import styled from 'styled-components';

export const BoldHeaderText = styled.span`
  text-decoration: underline;
  text-decoration-color: #FF8800;
  text-decoration-thickness: 4px;
  text-decoration-style: double;
  background: linear-gradient(89.97deg, #FFAA00 1.84%, #FF8800 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-size: ${(props) => props.main ? '75px' : '66px'};
  line-height: ${(props) => props.main ? '121px' : '105px'};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '36px' : '28px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
