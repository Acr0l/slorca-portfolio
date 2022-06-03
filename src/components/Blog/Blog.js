import Link from "next/link";
import React from "react";
import {
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Date from "../Date/Date";
import { PostLink } from "./BlogStyles";

const Blog = ({ allPostsData }) => {
  return (
    <section>
      <SectionTitle main center>
        Blog
      </SectionTitle>
      <SectionText>Here's a list of my posts!</SectionText>
      {allPostsData.map(({ id, title, date }) => (
        <div key={id}>
          <SectionSubText>
            <Date dateString={date} />
          </SectionSubText>
          <Link href={`/blog/${id}`}>
            <SectionText primary>
              <PostLink>{title}</PostLink>
            </SectionText>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Blog;
