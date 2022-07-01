import styled from 'styled-components';

export const HeaderText = styled.span`
  background: linear-gradient(89.97deg, #FFAA00 1.84%, #FF8800 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: ${(props) => props.fontSize}px;
  font-size-adjust: 0.55;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  padding: 20px;

  &:hover {
    font-size: ${(props) => props.fontSize + 0.5}px;
    color: #ffaa00;
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.lgText} {
    font-size: 2rem;

    &:hover {
      font-size: ${(props) => props.fontSize + 0.5}px;
      color: #ffaa00;
      opacity: 1;
      cursor: pointer;
    }
  }
`;


// Social Icons

export const SocialIcons = styled.a`
  transition: 0.2s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    color: #ff8800;
    background-color: #1f1f1f;
    transform: scale(1.1);
    cursor: pointer;
  }
`

export const BoldHeaderText = styled.span`
  padding-top: 15px;
  padding-bottom: 35px;
  text-decoration: underline;
  text-decoration-color: #FF8800;
  text-decoration-thickness: 4px;
  text-decoration-style: double;
  background: linear-gradient(89.97deg, #FFAA00 1.84%, #FF8800 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-size: ${(props) => props.main ? '75px' : '66px'};

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