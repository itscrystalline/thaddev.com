import {IoIosArrowDropdown} from 'react-icons/io';
import styled from 'styled-components';

export const HeaderText = styled.span`
  background: linear-gradient(89.97deg, #FFAA00 1.84%, #FF8800 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
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
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.lgText} {
    display: none;
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2.2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;

  &:hover {
    font-size: 2.25rem;
    color: #ffaa00;
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.lgText} {
    font-size: 2rem;

    &:hover {
      font-size: 2.05rem;
      color: #ffaa00;
      opacity: 1;
      cursor: pointer;
    }
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({isOpen}) => (isOpen ? '1' : '.75')};
  transform: ${({isOpen}) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  About
  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
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