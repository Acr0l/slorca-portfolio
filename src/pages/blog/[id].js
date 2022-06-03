import Head from "next/head";
import Link from "next/link";
import React from "react";
import { getAllPostsId, getPostData } from "../../../lib/posts";
import { PostLink } from "../../components/Blog/BlogStyles";
import Date from "../../components/Date/Date";
import { Layout } from "../../layout/Layout";
import {
  Section,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

export async function getStaticPaths() {
  const paths = getAllPostsId();
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const BlogPost = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | Sebastian Lorca</title>
      </Head>
      <Section row>
        <section>
          <SectionTitle main center>
            {postData.title}
          </SectionTitle>
          <SectionText>
            <Date dateString={postData.date} />
          </SectionText>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <br />
          <SectionSubText>
            <Link href="/blog">
              <PostLink>&larr; Back to all posts</PostLink>
            </Link>
          </SectionSubText>
        </section>
      </Section>
    </Layout>
  );
};

export default BlogPost;
