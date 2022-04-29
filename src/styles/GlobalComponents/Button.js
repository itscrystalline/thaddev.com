import styled from 'styled-components';

export const Button = styled.button`
  transition: color 0.5s cubic-bezier(.17, .67, .1, 1),
  padding 0.25s cubic-bezier(.17, .67, .1, 1),
  background-color 0.5s cubic-bezier(.17, .67, .1, 1),
  filter 0.5s cubic-bezier(.17, .67, .1, 1),
  border 0.5s cubic-bezier(.17, .67, .1, 1),
  transform 0.25s cubic-bezier(.17, .67, .1, 1),
  box-shadow 0.25s cubic-bezier(.17, .67, .1, 1),
  font-weight 0.5s cubic-bezier(.17, .67, .1, 1);
  font-weight: 600;
  font-size: 24px;
  display: block;
  width: 300px;
  height: 75px;
  line-height: 0;
  border-radius: 20px;
  background: linear-gradient(270deg, #0DA9FF 0%, #0026FF 100%);
  padding: 30px;
  color: #FFFFFF;
  box-shadow: 0px 7px 0px 0px #092bd7;

  background-size: contain;
  border: 3px #052aea solid;
  text-align: center;
  filter: saturate(0.9);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
    height: 50px;
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    height: 35px;
    width: 100%;
  }

  &:hover {
    filter: saturate(1);
    transform: translateY(-7px);
    box-shadow: 0px 14px 0px 0px #052aea;

    @media ${(props) => props.theme.breakpoints.md} {
      font-size: 18px;
      height: 50px;
      width: 100%;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 16px;
      height: 25px;
      width: 100%;
    }
  }

  &:active {
    transform: translateY(3px);
    border: 3px #1aa2f3 solid;
    box-shadow: 0px 4px 0px 0px #052aea;

    @media ${(props) => props.theme.breakpoints.md} {
      font-size: 18px;
      height: 50px;
      width: 100%;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 16px;
      height: 25px;
      width: 100%;
    }
  }
`;

