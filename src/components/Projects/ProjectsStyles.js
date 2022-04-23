import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }

`
export const ProjectCard = styled.div`
  transition: 0.2s ease;
  border-radius: 20px;
  box-shadow: 3px 3px 20px #0f0f0f;
  text-align: center;
  width: 400px;
  
  &:hover {
    box-shadow: 4px 4px 20px #0f0f0f;
    transform: scale(1.01);
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  font-weight: bold;
  align-items: center;
  margin: auto;
`;


export const HeaderThree = styled.h3`
  font-weight: bold;
  color: #bbbbbb;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 100px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #ffaa00;
`;

export const Vr = styled.hr`
  width: 3px;
  height: 100px;
  margin: 20px auto;
  border: 0;
  background: #ffaa00;
  display: flex;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: .3rem

  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d2d2d2;
  font-size: 1.6rem;
  font-weight: 400;
  padding: 1rem 1.5rem;
  background: #1279B3;
  border-radius: 15px;
  transition: 0.5s;

  &:hover {
    background: #0DA9FF;
    font-weight: bold;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`