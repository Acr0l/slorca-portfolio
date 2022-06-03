import React from "react";
import { getSortedPostsData } from "../../../lib/posts";
import BlogComponent from "../../components/Blog/Blog";
import { Layout } from "../../layout/Layout";
import { Section } from "../../styles/GlobalComponents";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Blog = ({ allPostsData }) => {
  return (
    <Layout>
      <Section row>
        <BlogComponent allPostsData={allPostsData} />
      </Section>
    </Layout>
  );
};

export default Blog;
