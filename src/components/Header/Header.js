import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size={"3rem"} />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href={"/#projects"}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"/#about"}>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"/#tech"}>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Acr0l" target="_blank">
        <AiFillGithub size={"2rem"} />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/slorca_g/" target="_blank">
        <AiFillInstagram size={"2rem"} />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/seba-lorca-g/"
        target="_blank"
      >
        <AiFillLinkedin size={"2rem"} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
