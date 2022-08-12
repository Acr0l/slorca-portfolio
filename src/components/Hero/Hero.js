import Link from "next/link";
import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { Img, LeftSection, RightSection } from "./HeroStyles";

// @ts-ignore
const Hero = (props) => (
  <Section
    // @ts-ignore
    row
    nopadding
  >
    <LeftSection>
      <SectionTitle
        // @ts-ignore
        main
        center
      >
        Hello There! <br />
        I'm Sebastian Lorca
      </SectionTitle>
      <SectionText>
        I enjoy reading fiction novels (The Name of The Wind is a treasured
        novel for me), playing the guitar, listening to music, working with the
        community, and watching series. Being surrounded by information and
        technology is what led me to pursue a path towards Computer Science, and
        I have been developing multiple projects to impact the community through
        them.
      </SectionText>
      <Link href="/pdf/seba_cv.pdf">
        <Button>View Resume</Button>
      </Link>
    </LeftSection>
    <RightSection>
      <Img src={"/images/seba.jpeg"} alt="Sebastian Lorca's picture" />
    </RightSection>
  </Section>
);

export default Hero;
