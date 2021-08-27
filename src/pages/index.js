import * as React from "react";
import { graphql } from "gatsby";
import "../../styles/global.css";
import Layout from "../components/layoutelements/layout";
import * as styles from "../../styles/pages/home.module.css";
import { CoursesIGCSE, Courseslvl3 } from "../components/common/courses";

const Home = (props) => {
  const {
    data: { allMarkdownRemark },
  } = props;
  return (
    <Layout title="Richmond College">
      <div className={styles.main_wrapper}>
        <CoursesIGCSE allMarkdownRemark={allMarkdownRemark} />
        <Courseslvl3 allMarkdownRemark={allMarkdownRemark} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getAllPosts {
    allMarkdownRemark {
      nodes {
        frontmatter {
          courseName
          courseCategory
        }
        id
        html
      }
    }
  }
`;

export default Home;
