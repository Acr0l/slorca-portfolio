import styled from "styled-components";

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    margin-left: 18px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 203px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 14px;
    max-width: 320px;
    flex-direction: row;
  }
`;

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;

export const StackList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1170px;
  text-align: center;
`;

export const StackItem = styled.div`
  box-sizing: border-box;
  flex-basis: 25%;
  max-width: 25%;
  padding: 0 15px;
  margin-bottom: 30px;
  @media ${(props) => props.theme.breakpoints.sm} {
    box-sixing: border-box;
    flex-basis: 50%;
    max-width: 50%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    box-sizing: border-box;
    max-width: 33.33%;
    flex-basis: 33.33%;
  }
`;

export const StackContent = styled.div`
  flex-direction: row;
  padding: 3.5rem 1.7rem;
  border: 1px solid #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

export const StackImgContainer = styled.div`
  margin-right: 16px;
  max-width: 60px;
  max-height: 60px;
  margin-bottom: 0;
  flex: 0 0 40%;
`;

export const StackImg = styled.img`
  max-width: 100%;
`;

export const StackTitle = styled.span`
  font-size: 1.5rem;
  line-height: 1.8rem;
  flex: 0 0 50%;
  font-wight: 500;
  color: #ffffff;
`;
