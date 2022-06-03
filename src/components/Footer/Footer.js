import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:me@sebastianlorca.com">
            me@sebastianlorca.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Capable, self-driven, and curious.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Acr0l" target="_blank">
            <AiFillGithub size={"2rem"} />
          </SocialIcons>
          <SocialIcons
            href="https://www.instagram.com/5eb4_lg/"
            target="_blank"
          >
            <AiFillInstagram size={"2rem"} />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/seba-lorca-g/"
            target="_blank"
          >
            <AiFillLinkedin size={"2rem"} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
