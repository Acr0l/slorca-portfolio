import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  justify-content: center;
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  width: 2000px;
  margin: 0 50px;
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Img = styled.img`
  border-radius: 9%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

