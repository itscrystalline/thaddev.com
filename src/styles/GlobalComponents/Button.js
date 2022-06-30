import React, {useState} from 'react';
import {useRouter} from 'next/router'
import styled from 'styled-components';

export const Button = styled.button`
  font-family: ${props => props.theme.fonts.main}, ${props => props.theme.fonts.thai};
  font-size-adjust: 0.534;
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

export const AdaptiveButtonStyle = styled.button`
  transition: color 0.5s cubic-bezier(.17, .67, .1, 1),
  padding 0.25s cubic-bezier(.17, .67, .1, 1),
  background-color 0.5s cubic-bezier(.17, .67, .1, 1),
  filter 0.5s cubic-bezier(.17, .67, .1, 1),
  border 0.5s cubic-bezier(.17, .67, .1, 1),
  transform 0.25s cubic-bezier(.17, .67, .1, 1),
  box-shadow 0.25s cubic-bezier(.17, .67, .1, 1),
  font-weight 0.5s cubic-bezier(.17, .67, .1, 1),
  width 0.25s cubic-bezier(.17, .67, .1, 1);
  font-size: 20pt;
  line-height: 0;
  border-radius: 20px;
  background: ${props => props.background};
  padding: ${props => props.padding};
  color: #FFFFFF;
  box-shadow: 0px 7px 0px 0px ${props => props.shadowColor};

  background-size: contain;
  border: 3px ${props => props.shadowColor} solid;
  text-align: center;
  filter: saturate(0.9);

  max-height: 61.6667px;
  max-lines: 1;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;

  &:hover {
    filter: saturate(1);
    transform: translateY(-3px);
    box-shadow: 0px 10px 0px 0px ${props => props.hoverShadowColor};
  }

  &:active {
    transform: translateY(1px);
    border: 3px ${props => props.activeBorderColor} solid;
    box-shadow: 0px 5px 0px 0px ${props => props.activeShadowColor};
  }
`;

export const LongButton = styled.button`
  font-family: ${props => props.theme.fonts.main}, ${props => props.theme.fonts.thai};
  font-size-adjust: 0.534;
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
  width: 100%;
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

export const HoverButton = styled.button`
  transition: color 0.5s cubic-bezier(.17, .67, .1, 1),
  padding 0.25s cubic-bezier(.17, .67, .1, 1),
  background-color 0.5s cubic-bezier(.17, .67, .1, 1),
  filter 0.5s cubic-bezier(.17, .67, .1, 1),
  border 0.5s cubic-bezier(.17, .67, .1, 1),
  transform 0.25s cubic-bezier(.17, .67, .1, 1),
  box-shadow 0.25s cubic-bezier(.17, .67, .1, 1),
  font-weight 0.5s cubic-bezier(.17, .67, .1, 1);
  font-size: 20pt;
  line-height: 0;
  border-radius: 20px;
  background: #00a4ff;
  padding: 10px;
  color: #FFFFFF;
  box-shadow: 0px 7px 0px 0px #0067dc;

  background-size: contain;
  border: 3px #0067dc solid;
  text-align: center;
  filter: saturate(0.9);

  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;

  &:hover {
    filter: saturate(1);
    transform: translateY(-3px);
    box-shadow: 0px 10px 0px 0px #006be3;
  }

  &:active {
    transform: translateY(1px);
    border: 3px #1aa2f3 solid;
    box-shadow: 0px 5px 0px 0px #0072f5;
  }
`;

const ChangeLanguageButton = () => {
  const router = useRouter()
  const {pathname, asPath, query} = router
  return (
    <HoverButton onClick={() => {
      router.push({pathname, query}, asPath, {locale: `${router.locale === "en-US" ? "th-TH" : "en-US"}`})
    }}>{router.locale === "en-US" ? "🇹🇭" : "🇺🇸"}</HoverButton>
  );
};

export const AdaptiveButton = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <AdaptiveButtonStyle {...props}>{isHovering ? props.hoveringText : props.regularText}</AdaptiveButtonStyle>
    </div>
  );
};

export default ChangeLanguageButton;
