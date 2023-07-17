import Link from "next/link";
import React from "react";
import { projects } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionTitle
} from "../../styles/GlobalComponents";
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  ProjectLink,
  Tag,
  TagList,
  TitleContent
} from "./ProjectsStyles";

const Projects = () => (
  <Section nopadding id={"projects"}>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <Link href={`/project/${id}.html`} key={id}>
            <a className={ProjectLink}>
              <BlogCard key={id}>
                <Img src={image} alt={title} />
                <TitleContent>
                  <HeaderThree title={title}>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <br />
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
              </BlogCard>
            </a>
          </Link>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
