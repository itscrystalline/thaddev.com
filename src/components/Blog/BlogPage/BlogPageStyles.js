import styled from "styled-components";

export const BlogCard = styled.div`
  transition: 0.2s ease;
  border-radius: 20px;
  box-shadow: 3px 3px 20px #0f0f0f;
  text-align: center;
  width: 475px;
  padding-bottom: 20px;
  
  &:hover {
    box-shadow: 4px 4px 20px #0f0f0f;
    transform: scale(1.01);
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;