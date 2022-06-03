import Image from "next/image";
import React from "react";
import { Stack } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  StackContent,
  StackImg,
  StackImgContainer,
  StackItem,
  StackList,
  StackTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have experience with the following technologies:
    </SectionText>
    <StackList>
      {Stack.map((stack) => (
        <StackItem key={stack.text}>
          <StackContent>
            <StackImgContainer>
              <Image
                className={StackImg}
                src={stack.source}
                alt={`${stack.text} Icon`}
                height={stack.height}
                width={stack.width}
                layout="responsive"
              />
            </StackImgContainer>
            <StackTitle>{stack.text}</StackTitle>
          </StackContent>
        </StackItem>
      ))}
    </StackList>
  </Section>
);

export default Technologies;
